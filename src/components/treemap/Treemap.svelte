<script>
    import * as d3 from 'd3';
    import { fade, fly } from 'svelte/transition';
    import { sourceDesc, treeData, treeDataPartial } from "../../../data/tree_data.js";
    import TreemapLegend from './legend/TreemapLegend.svelte';

    let margin = { top: 10, right: 10, bottom: 10, left: 10 };
    let width = 445 - margin.left - margin.right;
    let height = 445 - margin.top - margin.bottom;

    let key = "origin";
    let leaves;

    let filteredTreeData = treeData;
    let root = d3.hierarchy(filteredTreeData).sum(function(d){ return d.value}) 

    // Then d3.treemap computes the position of each element of the hierarchy
    d3.treemap()
        .size([width - (margin.left + margin.right), height - (margin.top + margin.bottom)])
        .padding(2)
        (root);

    function toggleChart(){
        key == 'origin'? key = 'freshwater': key = 'origin';
        filteredTreeData = (key === "freshwater")? treeDataPartial : treeData;
        console.log(filteredTreeData);
        drawChart();
    }

    function drawChart(){
        root = d3.hierarchy(filteredTreeData).sum(function(d){ return d.value});

        // Then d3.treemap computes the position of each element of the hierarchy
        d3.treemap()
            .size([width - (margin.left + margin.right), height - (margin.top + margin.bottom)])
            .paddingInner(3)
            (root);

        leaves = root.leaves();

        console.log(leaves);
    }

    drawChart();

    function hide(node, { delay=0, duration=0 }) {
        return {
            delay,
            duration,
            css: t => `opacity: 0`
        };
    }
</script>

<div class="graph_title">
        <button 
            on:click="{toggleChart}" 
            class:freshwater-active="{key==='freshwater'}"> 
                {key==="origin"? "Total": "Freshwater"} 
        </button>
    distribution of water on Earth
</div>

<div class="graph_container" style="width:{width + 50}px">
    <svg width={width} height={height}>
        <g style="transform: translate({margin.left}px,{margin.top}px)">
            {#if leaves}
                {#each leaves as d (d.data.name)}
                    <rect
                        x = {d.x0}
                        y = {d.y0}
                        opacity = { (d.x1 - d.x0) == 0 ? 0: 1 }
                        width = {d.x1 - d.x0}
                        height = {d.y1-d.y0}
                        class = "{ d.data.name } {key}-active"
                        fill = "#D9D9D9"
                        stroke = "#222" 
                    />
                    
                    <!-- Trigger transitions when 'key' changes -->
                    {#key key}
                        {#if d.data.name === "oceans" && key === "origin" || d.data.name === "icecaps" && key === "freshwater"}

                            <!-- BAN for percentage text  -->
                            <text
                                x = {d.x1 - 40}
                                y = {d.y0 + 75}
                                stroke = "black"
                                class = "ban"
                                in:fade={{delay: 1500, duration: 1000}} 
                                out:hide
                                > 
                                {d.data.value}% 
                            </text>

                            <!-- Description title text  -->
                            <text
                                x = {d.x0 + 15}
                                y = {d.y1 - 140}
                                stroke = "black"
                                class = "desc__title"
                                in:fade={{"delay": 1500, "duration": 1000}}> 
                                {key==="origin"? "Oceans": "Ice Caps"} 
                            </text>

                            <!-- Description divider line -->
                            <line x1={d.x0 + 15} x2={d.x0 + 200} y1={d.y1 - 120} y2={d.y1 - 120} stroke="#666"
                            in:fade={{"delay": 1500, "duration": 1000}}/>

                            <!-- Description long text  -->
                            <text
                                y = {d.y1 - 110}
                                stroke = "black"
                                class = "desc__text"
                                in:fade={{"delay": 1500, "duration": 1000}}> 
                                <!-- Add a tspan element for each line of the description -->
                                {#each sourceDesc[d.data.name] as line } 
                                    <tspan x={d.x0 + 15} dy={18} >{line}</tspan>
                                {/each}
                            </text>
                        {/if}
                    {/key}
                {/each}
            {/if}
        </g>
    </svg>

    <TreemapLegend key={key}/>
</div>


<style>
    .graph_title{
        font-family: 'Playfair Display', serif;
        color: #222;
        
        font-size: 28px;
        font-weight: 600;
        margin-bottom: 12px;
    }

    .graph_title button{
        font-family: Helvetica;
        font-size: 24px;
        padding: 6px 6px;
        margin-right: 4px;
        border: 1px solid #666;
        border-radius: 6px;

        transition: background-color 1s 0s;
    }

    .graph_title button.freshwater-active{
        color: #efefef;
        background-color: #222;
        border: 1px solid #efefef;
    }

    svg{
        border: 1px solid #222;
    }

    svg text.ban{
        stroke-width: 0.5px;
        font-size: 64px;
        text-anchor: end;
        letter-spacing: -4px;
        stroke: #333;
        fill: #333;
    }

    svg text.desc__title{
        stroke-width: 0.5px;
        font-size: 32px;
        stroke: #222;
        fill: #222;
    }

    svg text.desc__text{
        stroke: #333;
        fill: #333;
        stroke-width: 0.2px;
        font-family: Helvetica;
        font-size: 16px;
        letter-spacing: -0.2px;
    }

    rect.freshwater-active{
        transition: 
            opacity 1s 0s ease-in,  
            x 1s 1.3s ease, 
            y 1s 1.3s ease, 
            width 1s 1.3s ease, 
            height 1s 1.3s ease, 
            fill 1s 1.3s ease;
    }

    rect.origin-active{
        transition: 
            opacity 1s 0s ease-in,  
            x 1s 0.4s ease, 
            y 1s 0.4s ease, 
            width 1s 0.4s ease, 
            height 1s 0.4s ease, 
            fill 1s 0.4s ease;
    }

    rect.origin-active.saline, rect.origin-active.oceans{
        transition: 
            opacity 1s 1.2s ease-in,  
            x 0s 0.0s ease, 
            y 0s 0.0s ease, 
            width 0s 0.0s ease, 
            height 0s 0.0s ease, 
            fill 0s 0.0s ease;
    }

    rect.freshwater-active.saline, rect.freshwater-active.oceans{
        opacity: 0;
    }

    .origin-active.saline, .freshwater-active.groundwater{
        fill: #eaa67f;
    }
    .origin-active.groundwater, .origin-active.icecaps, .freshwater-active.surface{
        fill: #986985;
    }
</style>