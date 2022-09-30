<script>

</script>

<div class="legend">
    <div class="legend_item"> 
        <div class="legend_item__title">Other saline sources  <span>- 1%</span></div>
        <div class="legend_item__desc"></div>
    </div>
    <div class="legend_item"> 
        <div class="legend_item__title">Freshwater <span>- 2.5%</span></div>
        <div class="legend_item__desc"> The vast majority of water on the earth is found in its oceans. Being saline in nature, such water sources are unfit for domestic usage </div>
    </div>
</div>

<style>
    .legend{
        margin-left:50%;
    }

    .legend_item__title::before{
        display: inline-block;
        content: '  ';
        background-color: red;
        width: 12px;
        height: 12px;

        border: 1px solid #222;
        margin-right: 6px;
        margin-top: 5px;
    }

    .legend_item__title{
        font-size: 15px;
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
        font-size: 14px;
        font-family: "Helvetica";
        max-width: 55ch;
    }
</style>