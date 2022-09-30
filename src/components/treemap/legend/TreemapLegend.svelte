<script>
    import { legendDesc } from "../../../../data/tree_data.js";


    export let key;

    $:legendItems = legendDesc[key];

</script>


<div class="legend">
    {#each legendItems as item}
        <div class="legend_item"> 
            <div class="legend_item__title"> 
                <div class="legend_symbol" style="background-color:{item.colour}"></div> 
                {item.name}  
                <span>- {item.percentage}%</span>
            </div>
            <div class="legend_item__desc"> {item.desc} </div>
        </div>
    {/each}
</div>


<style>
    .legend{
        margin-left:50%;
    }

    .legend_item__title div.legend_symbol{
        display: inline-block;
        background-color: red;
        width: 12px;
        height: 12px;

        border: 1px solid #222;
        margin-right: 6px;
        margin-top: 5px;
    }

    .legend_item__title{
        font-size: 14px;
        font-family: "Helvetica";
        font-weight: 600;
        letter-spacing: -0.5px;
    }

    .legend_item__title span{
        font-weight: 400;
        letter-spacing: -1px;
    }

    .legend_item__desc{
        padding-left: 22px;
        margin-top: 2px;
        font-size: 13px;
        font-family: "Helvetica";
        max-width: 55ch;
    }
</style>