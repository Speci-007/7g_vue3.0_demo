<template>
  <div class='box ' :class="{box2:show}">
    <div class="box1" v-for="(item,index ) in arr"  :class="{clicked:current===index,isshow:show}" :key="index" @click="click1(index)">{{item}}</div>
      <div  style="background-color:rgb(4, 4, 5)" class="hide" :class="{isshow:show}"  v-for="(item ,index) in arr2 " :key="index">{{item}}</div>
  </div>
</template>

<script>
import {ref} from "vue"
export default {
 setup(props) {
let arr = ['说明','字体','色彩','布局']
let arr2 = ['栅格','瀑布']
let show = ref('')
let current = ref(0)
const click1= (index)=>{
current.value= index
console.log(current.value);
if(index==3){
show.value = !show.value
}
}
return{
  arr,click1,current,arr2,show
}
 }
};
</script>

<style  scoped>
.box div{
  box-sizing: border-box;
  width: 400px;
  height: 40px;
  color: rgb(170, 174, 178);
  background-color: rgb(31, 35, 44);
  padding-left: 7%;
  line-height: 40px;
}
.box .clicked{
  border-left: 3px  solid blue;
  background-color: rgb(4, 4, 5);
  color:white;
}
.box :nth-last-child(3){
  position: relative;
}
.box :nth-last-child(3)::after{
  content: "";
  position: absolute;
  border-left: 3px solid blue;
  border-top: 3px solid blue;
  display: inline-block;
  width: 5px;
  height: 5px;
  top: 21px;
  right: 31px;
  transform: rotate(225deg);
  transition: all 0.3s linear;
}
.box2 :nth-last-child(3)::after{
  content: "";
  position: absolute;
  border-left: 3px solid blue;
  border-top: 3px solid blue;
  display: inline-block;
  width: 5px;
  height: 5px;
  top: 21px;
  right: 31px;
  transform: rotate(45deg);
}
.hide{
  display: none;
}
.isshow{
  display: block !important;
}
</style>