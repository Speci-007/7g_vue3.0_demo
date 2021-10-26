<template>
  <div class='box'>
    <div class="div1">
      <h2>文本输入框</h2>
      <div class="div11">
        <div style="margin-bottom:10px">Default</div>
        <input class="ipt1" type="text" placeholder="请输入...">
      </div>
       <div class="div11">
        <div style="margin-bottom:10px">Disabled</div>
        <input class="ipt1 ipt2" disabled="disabled" type="text" placeholder="请输入...">
      </div>
       <div class="div11">
        <div style="margin-bottom:10px">Pure</div>
        <input class="ipt1 ipt3" type="text" placeholder="请输入...">
      </div>
    </div>
      <div class="div2">
        <h2>数字输入框</h2>
        <div class="div21">
          <div class="div11">
        <div style="margin-bottom:10px">Add & Reduce</div>
        <input v-model="num" class="ipt1" type="text" placeholder="请输入..." >
          <div class="div22" @click="increase"></div>
          <div class="div23" @click="decrease"></div>
      </div>
          <div class="div11">
        <div style="margin-bottom:10px">Add & Reduce</div>
         <!-- <div style="display:inline-block; width:34px;height:34px;border:1px solid #ccc"   @click="decrease">-</div> -->
 <span  @click="decrease2" style="display:inline-block; vertical-align:middle; width:34px;height:36px;border:2px solid #ccc;text-align:center;line-height:36px;font-size:36px ">-</span>
        <input  v-model="num2" class="ipt4" type="text" >
          <!-- <div style="display:inline-block" @click="increase">+</div> -->
 <span @click="increase2" style="display:inline-block; vertical-align:middle; width:34px;height:36px;border:2px solid #ccc;text-align:center;line-height:36px;font-size:32px ">+</span>
         
      </div>
        </div>
      </div>
      <div class="div3">
        <h2>选择框</h2>
        <div class="div31">
          <div style="margin:10px">Simple Select</div>
          <select name="" id="aa">
            <option value="1">Option1</option>
            <option value="2">Option2</option>
            <option value="3">Option3</option>
          </select>
        </div>
          <div class="div31">
          <div style="margin:10px">Type Select</div>
          <select name="" id="aa">
            <optgroup label="广东省">
           <option>深圳</option>
           <option>广州</option>
           <option>珠海</option>
             </optgroup>
               <optgroup label="江西省">
           <option>南昌</option>
           <option>九江</option>
           <option>抚州</option>
             </optgroup>
          </select>
        </div>




 

        <div class="div31" >
          <div style="margin:10px">Disabled Select</div>
          <select style="cursor: not-allowed;" disabled name="" id="aa">
            <option value="1">Option1</option>
            <option value="2">Option2</option>
            <option value="3">Option3</option>
          </select>
        </div> 

 <div style="margin-top:10px">Mul Select</div>

  <div id="selectBoard" style="line-height:36px;">
    
     <div class="traigle" @click="showbox"></div>
     <div v-show="show1">
        <ul @click="changed"  >
        <li><input ref="input0" @click="test" type="checkbox" name="" id="" value="蓝色" />蓝色</li>

        <li><input ref="input1" @click="test1" type="checkbox" name="" id="" value="绿色" />绿色</li>

        <li><input ref="input2" @click="test2"  type="checkbox" name="" id="" value="红色" />红色</li>

  

      </ul>
     </div>

      <span  id="shuju">{{(arr.list+'').replace(/ [ ] /,'')}}</span>

    </div>








<div style="height:500px ;width:300px"></div>





      </div>
  </div>
</template>

<script>
import { onMounted, ref,$refs,reactive} from "vue"
export default {
 setup(props) {
   let num = ref()
   let num2 = ref(0)
   let show1 = ref('')
   let arr = reactive({
     list:[]
   })
     
   let input0 = ref()
   let input1 = ref()
   let input2 = ref()
    const increase = ()=>{
      if(!num.value){
        num.value=0
      }
      num.value++;
    }
     const increase2 = ()=>{
      
      num2.value++;
    }
       const decrease = ()=>{
      if(num.value>1){
        num.value--;
      }
      else{
        num.value=1
      }
    }
      const decrease2 = ()=>{
      if(num2.value>1){
        num2.value--;
      }
      else{
        num2.value=1
      }
    }

    const showbox = ()=>{
         show1.value = !show1.value;
    }
   const test=()=>{
     if(input0.value.checked){
      arr.list.push(input0.value.value);
    
          }else{
          arr.list.pop(input0.value.value) 
          }  
   }
     const test1=()=>{
     if(input1.value.checked){
      arr.list.push(input1.value.value);
          }else{
          arr.list.pop(input1.value.value) 
          }  
   }
     const test2=()=>{
     if(input2.value.checked){
      arr.list.push(input2.value.value);
          }else{
          arr.list.pop(input2.value.value) 
          }  
   }
   return {
     num,increase,decrease,
     num2,increase2,decrease2,
     show1,showbox,arr,test,input0,input1,input2,test1,test2
   }
 }
  
};
</script>

<style  scoped>
.div11{
  width: 400px;
  height: 100px;
}
.ipt1{
  width: 100%;
  height: 34px;
  font-size: 16px;
  padding-left: 10px;
}

.ipt2:hover{
  cursor: not-allowed;
}
.ipt3{
  border-width: 0 0 1px 0;
  outline: none;
}
.div11{
  position: relative;
}
.div22{
  border-left: 8px solid transparent;
   border-bottom: 8px solid black;
   border-right: 8px solid transparent;
   border-top: 8px solid transparent;
   width: 0px;
   height: 0px;
   position: absolute;
   top: 27px;
   right: 1px;
}
.div23{
  border-left: 8px solid transparent;
   border-top: 8px solid black;
   border-right: 8px solid transparent;
   border-bottom: 8px solid transparent;
   width: 0px;
   height: 0px;
   position: absolute;
   top: 55px;
   right: 1px;
}
.ipt4{
  font-size: 20px;
  padding-left: 20px;
  width: 60%;
  height: 34px;
  vertical-align:middle;
  border:2px solid #ccc;
  border-left: 0;
  border-right: 0;
}
.div3{
  width: 300px;
  height: 300px;
}
.div31 select{
  width: 100%;
  height: 36px;
}


    #selectBoard {

      width: 300px;

      height: 36px;

      border: 1px solid black;

      position: relative;

      margin: 30px auto;

    }

   ul {

      width: 260px;

      background: white;

      position: absolute;

      top: 21px;

      left: -1px;
      
      border: 1px solid black;
      border-top: 0;
     
     /* display: none; */
    }

    #selectBoard ul li {
      list-style: none;
    }
    #selectBoard ul li:hover {
      background: rgb(216, 223, 230);
    }
      .traigle{
   position: absolute;
   border-left: 8px solid transparent;
   border-top: 8px solid black;
   border-right: 8px solid transparent;
   border-bottom: 8px solid transparent;
   top: 15px;
   right: 6px;
   width: 0px;
   height: 0px;
      }

 .isshow{
  display: block;
}
.noshow{
 display: none;
}

</style>