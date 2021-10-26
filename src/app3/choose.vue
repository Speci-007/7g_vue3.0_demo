<template>
  <div class='box'>
    <div class="box1">
      <h3>Simple Select</h3>
      <input type="radio" id="1" name="color" checked>
      <label style="margin-left:20px" for="1">蓝色</label>
      <input type="radio"  id="2" name="color">
      <label style="margin-left:20px" for="2">绿色</label>
      <input type="radio"  id="3" name="color">
    <label style="margin-left:20px" for="3">红色</label>
    </div>
     <div class="box2">
      <h3>Warn Select </h3>
      <input type="radio" id="11" name="color1" checked>
      <label style="margin-left:20px" for="11">蓝色</label>
      <input type="radio"  id="22" name="color1">
      <label style="margin-left:20px" for="22">绿色</label>
      <input type="radio"  id="33" name="color1">
    <label style="margin-left:20px" for="33">红色</label>
    </div>
      <div class="box3">
      <h3>Danger Select</h3>
      <input type="radio" id="44" name="color2" checked>
      <label style="margin-left:20px" for="44">蓝色</label>
      <input type="radio"  id="55" name="color2">
      <label style="margin-left:20px" for="55">绿色</label>
      <input type="radio"  id="66" name="color2">
    <label style="margin-left:20px" for="66">红色</label>
    </div>
     <div class="box4">
      <h3>Success Select</h3>
      <input type="radio" id="77" name="color3" checked>
      <label style="margin-left:20px" for="77">蓝色</label>
      <input type="radio"  id="88" name="color3">
      <label style="margin-left:20px" for="88">绿色</label>
      <input type="radio"  id="99" name="color3">
    <label style="margin-left:20px" for="99">红色</label>
    </div>

    <div class="box5" style="margin-top:50px">
      <h3>Simple Select</h3>
      <input type="checkbox" checked id="blue1">
      <label for="blue1">蓝色</label>
      <input type="checkbox" checked id="green">
         <label for="green1">绿色</label>
      <input type="checkbox" checked id="red1">
         <label for="red1">红色</label>
    </div>
     <div class="box5 box6" style="margin-top:50px">
      <h3>Disabled Select</h3>
      <input type="checkbox"  disabled id="blue1">
      <label for="blue1">蓝色</label>
      <input type="checkbox" disabled checked id="green">
         <label for="green1">绿色</label>
      <input type="checkbox" disabled  id="red1">
         <label for="red1">红色</label>
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

input{
  width: 25px;
  height: 25px;
  vertical-align: bottom;

}
input[type="radio"] + label::before {
    content: " ";
    display: inline-block;
    vertical-align: middle;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%; 
    margin-right: 0.5rem;
    box-sizing: border-box;
}
input[type="radio"]:checked + label::before {
   
    background-clip: content-box;
    padding: .149333rem;
    box-sizing: border-box;
}
.box1  input[type="radio"] + label::before{
 border: .064rem solid blue;
}
.box1 input[type="radio"]:checked + label::before{
 background-color:blue;
}
.box2  input[type="radio"] + label::before{
 border: .064rem solid #fd8869;
}
.box2 input[type="radio"]:checked + label::before{
 background-color: #fd8869;
}
.box3  input[type="radio"] + label::before{
 border: .064rem solid red;
}
.box3 input[type="radio"]:checked + label::before{
 background-color: red;
}
.box4  input[type="radio"] + label::before{
 border: .064rem solid green;
}
.box4 input[type="radio"]:checked + label::before{
 background-color: green;
}
input[type="radio"] {
    position: absolute;
    clip: rect(0, 0, 0, 0);
}
.box5 input{
  vertical-align: middle;
}
.box5 label{ 
   margin-right:15px ;

}
.box6 input{
  cursor: not-allowed;
}
</style>