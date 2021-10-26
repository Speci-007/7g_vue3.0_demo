<template>
  <div class=''>
    <h2>开关</h2>
    <h3>圆角开关</h3>
  <div class="blue">
     <div class="btn"  @click="aaa" :class="{ccc:istrue}">
     <div :class="{ddd:istrue}" class="circle" ></div>
   </div>
     <div class="btn btn2"   :class="{ccc:istru}">
     <div :class="{ddd:istru}" class="circle" ></div>
   </div>
  </div>

  <div class="warn">
     <div class="btn"  @click="aaa2" :class="{ccc:istrue2}">
     <div :class="{ddd:istrue2}" class="circle" ></div>
   </div>
     <div class="btn btn2"   :class="{ccc:istru}">
     <div :class="{ddd:istru}" class="circle" ></div>
   </div>
  </div>
   
  </div>
</template>

<script>
import {reactive, toRefs,ref} from "vue"
export default {
 setup(props) {
  var istrue = ref('')
  var istrue2 = ref('')
  const aaa =()=>{
     istrue.value = !istrue.value  
   }
    const aaa2 =()=>{
     istrue2.value = !istrue2.value  
   }
   
   return {
     istrue,
     istrue2,
     aaa,aaa2
   }
 }
};
</script>

<style  scoped>

.btn{
  width: 60px;
  height: 36px;
  background-color: rgb(74, 144, 226);
  border-radius: 36px;
  position: relative;
  display: inline-block;
  margin-right:30px ;
  }
  .warn .btn{
    background-color: rgb(227, 125, 41);
  }
.btn .circle{
content: '';
width: 24px;
height: 24px;
background-color: #fff;
position: absolute;
left:29px ;
top:6px;
border-radius: 50%;
transition: all 0.2s ease;
}
.ccc{
background-color: rgb(217, 217, 217);
}
.btn .ddd{
  left: 7px;
position: absolute;
background-color: #fff;
}
.btn2:hover{
  cursor:not-allowed;
  /* opacity: .5; */
}
.btn2{
  margin-top:30px ;
  background-color: rgb(74, 144, 226,.6);
}
.warn .btn2{
  background-color: rgb(227, 125, 41,.6);

}
</style>