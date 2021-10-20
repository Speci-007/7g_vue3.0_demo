<template>
  <div class='container'>
    <div class="left">
      <div class="left2"></div>
    </div>
    <div class="right">
      <div class="right2">
      </div>
    </div>
  </div>
</template>

<script>
export default {
 
};
</script>
<style  scoped>
/* // 4-8双栏文本布局 */
.container{
  height: 200px;
  width: 300px;
}
.left{
    height: 100%;
    width: 33.33%;
    float: left;
    padding-right: 12px;
    box-sizing: border-box;

}
.right{
    height: 100%;
    width: 66.67%;
    float: left;
    box-sizing: border-box;
    padding-left: 12px;
 
}
.left2{
   height: 100%;
    border-radius: 6px ;
   background-color: rgb(211, 220, 230);
}
.right2{
   background-color: rgb(211, 220, 230);
   height: 100%;
    border-radius: 6px ;
}
</style>