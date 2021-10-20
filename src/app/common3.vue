<template>
  <div class='container'>
    <div class="box1">
      <div>col-4</div>
      <div>col-4</div>
      <div>col-4</div>
    </div>
     <div class="box2">
      <div>col-3</div>
      <div>col-4</div>
      <div>col-3</div>
      <div>col-2</div>
    </div>
     <div class="box3">
      <div>col-3</div>
      <div>col-3</div>
      <div>col-6</div>
    </div>
     <div class="box4">
      <div>col-8</div>
      <div>col-4</div>
    </div>
  </div>
</template>

<script>
export default {
 
};
</script>

<style  scoped>
.container{
  width: 500px;
  height: 500px;
  border-radius: 10px;
  border :1px solid #ccc
}
.box1{
   display: grid;
   grid-column-gap: 9%;
   grid-template-columns:27.33% 27.33% 27.33%;
   }
   .box2{
   display: grid;
   grid-column-gap: 6%;
   grid-template-columns:20.5% 27.06% 20.5% 14%;
   margin-top: 20px;
   }
   .box3{
   display: grid;
   grid-column-gap: 6%;
   grid-template-columns:22% 22% 44%;
   margin-top: 20px;
   }
   .box4{
   display: grid;
   grid-column-gap: 6%;
   grid-template-columns: 63.98% 30%;
   margin-top: 20px;
   }
   .box1 div{
     height:50px;
     border-radius: 10px;
     background-color: rgb(211, 220, 230);
   } 
   .box2 div{
     height:50px;
     border-radius: 10px;
     background-color: rgb(211, 220, 230);
   }
   .box3 div{
       height:50px;
     border-radius: 10px;
     background-color: rgb(211, 220, 230);
   }
    .box4 div{
       height:50px;
     border-radius: 10px;
     background-color: rgb(211, 220, 230);
   }
</style>