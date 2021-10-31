<template >
 <div style="position:realtive">
   <div style="height:100vh; padding: 100px 150px "  :class="{shadow:show}" >
    <div class='box'>
    <div @click="change('基础弹框',1)">展示基础窗</div>
    <div @click="change('信息',2)" style="background-color:rgb(74, 144, 226)">展示信息窗</div>
    <div   @click="change('警告',3)" style="background-color:rgb(227, 125, 41)">展示警告窗</div>
    <div  @click="change('错误',4)" style="background-color:rgb(222, 80, 78)">展示错误窗</div>
    <div @click="change('成功',5)" style="background-color:rgb(71, 183, 71)">展示成功窗</div>
  </div>
 
 </div>
  <div class="big" v-if="show">
    <div style="margin:10px 28px" :class="[{blue1:val2==2},{warn1:val2==3},{red1:val2==4},{green1:val2==5}]">
      <h3 v-if="val2==1" >&nbsp;{{ message}}</h3>
      <h3 v-if="val2==2" class="icon-info">&nbsp;{{ message}}</h3>
      <h3 v-if="val2==3" class="icon-notification">&nbsp;{{message}}</h3>
      <h3 v-if="val2==4" class="icon-cancel-circle">&nbsp;{{message}}</h3>
      <h3 v-if="val2==5" class="icon-checkmark2">&nbsp;{{message}}</h3>
      </div>
    <p  style="margin:18px 25px">{{message}} {{message}} {{message}}{{message}}{{message}}{{message}}{{message}} </p>
   <div style="position:realtive">
      <div class="btn" style="background-color:rgb(74, 144, 226)" @click="cancel">确认</div>
    <div class="btn btn2" @click="cancel">取消</div>
   </div>
    </div>
 </div>
</template>

<script>
import {ref} from "vue"
export default {
 setup(props) {
   let show = ref()
   let message = ref()
   let val2 = ref()
   const change =(val,index)=>{
     show.value = true;
     message.value = val
     val2.value = index
   }
   const cancel = ()=>{
     show.value = false
   }
   return {
     show,change,cancel,message,val2
   }
 }

};
</script>

<style  scoped>
.box{
  width: 800px;
  height:150px;
  border: 1px solid #ccc;
  display: flex;
  align-content: center;
  align-items: center;

}
.box div{
  width: 110px;
  height: 34px;
  border: 1px solid #ccc;
  text-align: center;
  line-height: 34px;
  margin: 15px;
  border-radius: 3px;
}
.big{
width: 360px;
height: 180px;
background-color: #fff;

top: 50%;
left: 50%;
transform: translate(-50%,-50%);
position: absolute;
z-index: 8;
}
.shadow{
  background-color:rgba(178, 179, 177, 0.3);
  height:100% ;
  width: 100%;
  position:absolute;
  z-index:2;
}
.btn{
  width: 74px;
  height: 35px;
  border: 1px solid #ccc;
  text-align: center;
  line-height: 35px;
  position:absolute;
  top: 130px;
  left: 185px;
}
.btn2{
   position:absolute;
  top: 130px;
  left: 270px;
}
.btn2:hover{
  border:1px solid rgb(74, 144, 226);
}
.blue1{
  color: rgb(74, 144, 226);
}
.warn1{
  color: rgb(227, 125, 41);
}
.red1{
   color: rgb(222, 80, 78);
}
.green1{
   color: rgb(71, 183, 71);
}
</style>