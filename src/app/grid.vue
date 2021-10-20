<template>
 <div class="all">
  <div class="container1">
    <div class="div2">col-1</div>
    <div class="div3">col-11</div>
  </div>
   <div class="container2">
    <div class="div2">col-2</div>
    <div class="div3">col-10</div>
  </div>
   <div class="container3">
    <div class="div2">col-3</div>
    <div class="div3">col-9</div>
  </div>
   <div class="container4">
    <div class="div2">col-4</div>
    <div class="div3">col-8</div>
  </div>
   <div class="container5">
    <div class="div2">col-5</div>
    <div class="div3">col-7</div>
  </div>
   <div class="container6">
    <div class="div2">col-6</div>
    <div class="div3">col-6</div>
  </div>
   <div class="container7">
    <div class="div2">col-7</div>
    <div class="div3">col-5</div>
  </div>
   <div class="container8">
    <div class="div2">col-8</div>
    <div class="div3">col-4</div>
  </div>
   <div class="container9">
    <div class="div2">col-9</div>
    <div class="div3">col-3</div>
  </div>
   <div class="container10">
    <div class="div2">col-10</div>
    <div class="div3">col-2</div>
  </div>
   <div class="container11">
    <div class="div2">col-11</div>
    <div class="div3">col-1</div>
  </div>
   <div class="container12">
    <div class="div2">col-12</div>
  </div>
 </div>
</template>

<script>
export default {
  components: {
    
  },
  setup(props,context) {
    
  },
  

};
</script>

<style  scoped>
.all{
  width: 60%;
  border-radius: 5px;
  height: 600px;
 padding: 20px;
}
.container1{
  display: grid;
  height: 8%;
  grid-template-columns: 8.3% 91.7%;
  margin: 15px 0;
}
.container2{
  display: grid;
  height: 8%;
  grid-template-columns: 16.6% 83.4%;
  margin: 15px 0;
}
.container3{
  display: grid;
  height: 8%;
  grid-template-columns: 24.9% 75.1%;
  margin: 15px 0;
}
.container4{
  display: grid;
  height: 8%;
  grid-template-columns: 33.2% 66.8%;
  margin: 15px 0;
}
.container5{
  display: grid;
  height: 8%;
  grid-template-columns: 41.5% 58.58%;
  margin: 15px 0;
}
.container6{
  display: grid;
  height: 8%;
  grid-template-columns: 49.8% 50.2%;
  margin: 15px 0;
}
.container7{
  display: grid;
  height: 8%;
  grid-template-columns: 58.1% 41.9%;
  margin: 15px 0;
}
.container8{
  display: grid;
  height: 8%;
  grid-template-columns: 66.4% 33.6%;
  margin: 15px 0;
}
.container9{
  display: grid;
  height: 8%;
  grid-template-columns: 74.7% 25.3%;
  margin: 15px 0;
}
.container10{
  display: grid;
  height: 8%;
  grid-template-columns: 83% 17%;
  margin: 15px 0;
}
.container11{
  display: grid;
  height: 8%;
  grid-template-columns: 91.3% 8.7%;
  margin: 15px 0;
}
.container12{
  display: grid;
  height: 8%;
  grid-template-columns: 100% ;
  margin: 15px 0;
}
.div2{
  background-color: rgb(211, 220, 230);
  border-radius: 10px;
}
.div3{
  background-color: rgb(229, 233, 242);
  border-radius: 10px;
}

</style>