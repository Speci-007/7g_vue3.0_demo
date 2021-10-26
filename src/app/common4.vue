<template>
  <div class='container'>
  <div class="box1">
      <form action="">
      <div >
         <label for="device">Device Name</label>
         <br>
         <input type="text" id="device" placeholder="Input device name...">
      </div>
       <div>
         <label for="model">Device Model</label>
         <br>
         <input type="text" id="model" placeholder="Input device model...">
      </div>
  <div class="div3">
         <label for="type">Device Type</label>
         <br>
         <select  value="2">
           <option value="1">灯杆</option>
           <option value="2">摄像头</option>
           <option value="3">广播</option>

         </select>
      </div>
      
     
    </form>
  </div>
   <div class="box2" style="margin-top:100px">
      <form action="">
      <div >
         <label class="bb" for="device2">Device Name</label>     
         <input class="aa" type="text" id="device2" placeholder="Input device name...">
      </div>
       <div>
         <label  class="bb"  for="model2">Device Model</label>
         
         <input class="aa" type="text" id="model2" placeholder="Input device model...">
      </div>
  <div class="div3">
         <label  class="bb"  for="type">Device Type</label>
      
         <select  value="2">
           <option value="1">灯杆</option>
           <option value="2">摄像头</option>
           <option value="3">广播</option>

         </select>
         

      </div>

       <div class="cc">
      Device Protocol<input style="margin-left:15px" type="checkbox" name="blue" id="blue" checked>
        <label for="blue">蓝色</label>
     <input style="margin-left:15px" type="checkbox" name="green" id="green" checked>
    <label for="green">绿色</label>
     <input style="margin-left:15px" type="checkbox" name="red" id="red" checked>
     <label for="red">红色</label>
    </div>
     <div class="cc">
      Device Secure<input style="margin-left:25px" type="radio" name="color" id="blue1" >
        <label for="blue1">蓝色</label>
     <input style="margin-left:15px " type="radio" name="color" id="green1" checked>
    <label for="green1">绿色</label>
     <input style="margin-left:15px ; width:20px;height:20px" type="radio" name="color" id="red1">
     <label for="red1">红色</label>
    </div>
    </form>
  </div>
  
  </div>
</template>

<script>
export default {
 
};
</script>

<style scoped>
.box1{
  width: 350px;
  height: 320px;
  border: 1px solid #ccc;
  padding: 0 15px;
  border-radius: 5px;
}
.box1 div label{
width: 100%;
}
.box1 div{
margin:15px ;
width: 90%;
   
}
.box1 div input{
width: 100%;
height: 30px;
border: 1px solid #ccc;
margin-top:15px ;
padding-left: 8px;
}

.box1 .div3 select{
width: 100%;
height: 30px;
border: 1px solid #ccc;
margin-top:15px ;
}


.box2{
  width: 380px;
  height: 320px;
  border: 1px solid #ccc;
  padding: 0 15px;
  border-radius: 5px;
}
.box2 div{
  width: 100%;
  margin: 25px 0;
}

.aa{
 width:62.5%;

}

.bb{
   display: inline-block;
  width: 35%;
}
.box2 select{
  width:65%;
  margin: 0;
}
.cc input{
  width:20px;
  height:20px;
 
}



</style>