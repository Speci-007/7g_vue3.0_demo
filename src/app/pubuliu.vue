<template>
  <div class='box'>
    <div class="item">
      <img src="../img/IMG_1841.jpg" alt="123">
    </div>
    <div class="item">
      <img src="../img/IMG_1897.jpg" alt="123">
    </div>
    <div class="item">
      <img src="../img/IMG_1894.jpg" alt="123">
    </div>
    <div class="item">
      <img src="../img/IMG_1896.jpg" alt="123">
    </div>
    <div class="item">
      <img src="../img/IMG_1869.jpg" alt="123">
    </div>
    <div class="item">
      <img src="../img/IMG_1910.jpg" alt="123">
    </div>
    <div class="item">
      <img src="../img/IMG_1922.jpg" alt="123">
    </div>
    <div class="item">
      <img src="../img/IMG_1923.jpg" alt="123">
    </div>
    <div class="item">
      <img src="../img/IMG_1943.jpg" alt="123">
    </div>
    <div class="item">
      <img src="../img/IMG_1947.jpg" alt="123">
    </div>
    <div class="item">
      <img src="../img/IMG_1975.jpg" alt="123">
    </div>
      <div class="item">
      <img src="../img/IMG_1943.jpg" alt="123">
    </div>
    <div class="item">
      <img src="../img/IMG_1947.jpg" alt="123">
    </div>
    <div class="item">
      <img src="../img/IMG_1975.jpg" alt="123">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    };
  },
 
};
</script>

<style  scoped>
/* 方式一 */
/* .box{
  display: flex;
  flex-flow: column wrap;
  height: 100vh;
} */

.box{
  margin: 10px;
  column-count: 4;
  /* 是分为多少列 */
  column-gap: 10px;
  /* 是设置列与列之间的距离。 */

}
.item{
  margin-bottom: 10px;
 
}
.item img{
  width: 100%;
  height: 100%;
}

</style>