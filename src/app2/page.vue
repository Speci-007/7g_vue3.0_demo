<template>
  <div >
 
   <div class="box">
<div class="div1" :class="{active:1===current}"   >
    <router-link to="/api"  style=" color: rgb(138, 138, 138);
  font-size: 22px; text-decoration:none" :class="{active2:1===current}"   @click="change(1)">api</router-link>
</div>
<div class="div2" :class="{active:2===current}"  >
      <router-link to="/use" style=" color: rgb(138, 138, 138);
  font-size: 22px; text-decoration:none" :class="{active2:2===current}"  @click="change(2)">基本用法</router-link>
</div>
  <div class="div3" :class="{active:3===current}"   >
      <router-link to="/onchange" style=" color: rgb(138, 138, 138);
  font-size: 22px;text-decoration:none" :class="{active2:3===current}" @click="change(3)">绑定onchange</router-link> 
  </div>
   </div>
 <keep-alive>
 
   <router-view></router-view>
 </keep-alive>

  </div>
</template>

<script>
// import { onMounted } from '@vue/runtime-core';
import {ref} from 'vue'
export default {
 setup(props) {
   let current = ref(1)
  const change=(index)=>{
  current.value = index
    console.log( current.value);
  }
      return{
        change,current
      }
 }
};
</script>

<style  scoped>
.box{
  width: 500px;
  height: 50px;
  border-bottom: 1px solid #ccc;
  display: flex;
}
.box div {
  flex: 1;
  text-align: center;
  line-height: 50px;
}
.active{
  border-bottom: aqua 2px solid;
  color: aqua!important;
}
.active2{
  color: aqua!important;
}
</style>