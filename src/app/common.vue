<template>
  <div class="container">
    <div class="box1">
      <div class="header">header: hight:70px</div>
      <div class="main">
        <div class="aside"> aside 20%</div>
        <div class="content">
          <p > container:99999999999999999999999999999999999</p>
          </div>
     </div>
    </div>
  </div>
 
</template>

<script>
export default {

};
</script>

<style  scoped>
/* 经典2-8内滚布局 */
.container{
  height: 500px;
  width: 500px;
  margin: 0 auto;
}
.box1{
  width: 100%;
  height:100%;
}
.header{
  height: 70px; 
background-color: rgba(153, 169, 191);
}
.main{
  height: calc(100% - 70px);
  position: relative;
  /* padding-left: 20%; */
}
.aside{
 width: 20%;
 height: 100%;
 position: absolute; 
 top: 0; 
 left: 0;
background-color: rgba(211, 220, 230);
}
.content{
background-color: rgba(229, 233, 242);
 position: relative;
 height: 100%; 
 left: 20%;
 width: 80%;
  overflow: auto;
  overflow-x: hidden; 
}
p{
  height: 800px;
  word-wrap: break-word;
}
</style>