<script>
  //@ts-nocheck
  import Treemap from "./components/treemap/Treemap.svelte";
  
</script>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@800&display=swap" rel="stylesheet">

<main>
  <Treemap/>
</main>

<style>
  @media (min-width:800px){
    main{
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

</style>
