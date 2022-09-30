<script>
    import * as d3 from 'd3';
    import { fade } from 'svelte/transition';
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
</script>

<div class="graph_container" style="width:{width + 100}px">
    <button on:click="{toggleChart}"> Toggle </button>  
    <br>
    <br>

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
                        class = { d.data.name }
                        fill = "#D9D9D9"
                        stroke = "#222" />

                    {#if d.data.name === "oceans" && key === "origin" || d.data.name === "icecaps" && key === "freshwater"}

                        <!-- BAN for percentage text  -->
                        <text
                            x = {d.x1 - 40}
                            y = {d.y0 + 75}
                            stroke = "black"
                            class = "ban"> 
                            {d.data.value}% 
                        </text>

                        <!-- Description title text  -->
                        <text
                            x = {d.x0 + 20}
                            y = {d.y1 - 140}
                            stroke = "black"
                            class = "desc__title"> 
                            {key==="origin"? "Oceans": "Icecaps"} 
                        </text>

                        <!-- Description divider line -->
                        <line x1={d.x0 + 20} x2={d.x0 + 200} y1={d.y1 - 120} y2={d.y1 - 120} stroke="#666"/>

                        <!-- Description long text  -->
                        <text
                            y = {d.y1 - 110}
                            stroke = "black"
                            class = "desc__text"> 
                            <!-- Add a tspan element for each line of the description -->
                            {#each sourceDesc[d.data.name] as line } 
                                <tspan x={d.x0 + 20} dy={18} >{line}</tspan>
                            {/each}
                        </text>
                    {/if}

                {/each}
            {/if}
        </g>
    </svg>

    <TreemapLegend />
</div>


<style>
    .graph_container{

    }

    svg{
        border: 1px solid #222;
    }

    rect{
        transition: all 1s 0.5s ease;
    }

    /*
    rect.oceans, rect.saline {
        transition: width 0s 0.5s ease-out, height 0s 0.5s ease-out, opacity 2s 2s ease, x 0s 4s;
    }
    */

    svg text.ban{
        stroke-width: 0.5px;
        font-size: 64px;
        text-anchor: end;
        letter-spacing: -4px;
    }

    svg text.desc__title{
        stroke-width: 0.5px;
        font-size: 32px;
    }

    svg text.desc__text{
        stroke: #222;
        stroke-width: 0.3px;
        font-size: 17px;
        letter-spacing: -0.2px;
    }
</style>