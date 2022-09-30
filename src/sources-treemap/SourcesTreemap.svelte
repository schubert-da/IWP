<script>
// @ts-nocheck

    import * as d3 from 'd3';

    let margin = {top: 10, right: 10, bottom: 10, left: 10};
    let width = 445 - margin.left - margin.right;
    let height = 445 - margin.top - margin.bottom;

    let treemap; 

    let root;

    let key = "origin";

    $: {
        if(typeof(data) == undefined){ filteredData = data.filter( d => d.parent === key || d.name == "origin"); }
        
        root = d3.stratify()
            .id(function(d) { return d.name; })   // Name of the entity (column name is name in csv)
            .parentId(function(d) { return d.parent; })   // Name of the parent (column name is parent in csv)
            (filteredData);
    }


    d3.csv('../data/tree_data.csv').then(function(data) {
        // console.log(data);
        let filteredData = data.filter( d => d.parent === key || d.name == "origin");

        root = d3.stratify()
            .id(function(d) { return d.name; })   // Name of the entity (column name is name in csv)
            .parentId(function(d) { return d.parent; })   // Name of the parent (column name is parent in csv)
            (filteredData);
        
        root.sum(function(d) { return +d.value });
        
        treemap = d3.treemap()
            .size([width - (margin.left + margin.right), height - (margin.top + margin.bottom) ])
            .padding(6)
            (root);
;
        console.log(root.leaves());
     })

</script>

<button on:click="{ ()=> key == 'origin'? key = 'freshwater': key = 'origin'}"> 
    Toggle
</button>
<br>
<svg width={width} height={height}>
    <g style="transform: translate({margin.left}px,{margin.top}px)">
        {#if root}
            {#each root.leaves() as d}
                <rect
                    x = {d.x0}
                    y = {d.y0}
                    width = {d.x1 - d.x0}
                    height = {d.y1-d.y0}
                    fill = "#aaa"
                    stroke = "#222" />
            {/each}
        {/if}
    </g>
</svg>



<style>

    svg{
        background-color: #666;
        border: 1px solid #222;
    }

</style>