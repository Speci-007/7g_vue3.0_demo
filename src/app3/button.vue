<template>
  <div class='box'>
    <h1>按钮</h1>
    <div class="style1">
           <div><h2>风格</h2></div>
         <span class="aa">Default</span>
         <span class="bb">Primary</span>
         <span class="cc">Warn</span>
         <span class="dd">Danger</span>
         <span class="ee">Success</span>
    </div>
    <div style="margin:15px">
           <div><h2>文本</h2></div>
         <span  style="margin-right:20px ;color:black">Default</span>
         <span  style="margin-right:20px ;color:blue">Primary</span>
         <span  style="margin-right:20px ;color:rgb(227, 125, 41)">Warn</span>
         <span  style="margin-right:20px ;color: rgb(222, 80, 78)">Danger</span>
         <span  style="margin-right:20px ;color:rgb(71, 183, 71)">Success</span>
        
         </div>
         <div class="style1 style2">
           <div><h2>禁用</h2></div>
         <span class="aa">Default</span>
         <span class="bb">Primary</span>
         <span class="cc">Warn</span>
         <span class="dd">Danger</span>
         <span class="ee">Success</span>
    </div>
    <div class="big" style="  margin: 15px;" >
      <div><h2>大小</h2></div>
      <span style="display:inline-block;width:50px;height:25px;border:1px solid #ccc; text-align:center; margin-right:20px">Small</span>
      <span style="display:inline-block;width:90px;height:40px; line-height:40px;border:1px solid #ccc; text-align:center; margin-right:20px">Normal</span>
      <span style="display:inline-block;width:150px;height:65px;  line-height:65px;border:1px solid #ccc; text-align:center; margin-right:20px">Large</span>
    </div>

    <div style="  margin: 15px;">
      <div><h2>圆角</h2></div>
                <span style="display:inline-block;width:90px;height:40px; line-height:40px;border:1px solid #ccc; text-align:center; margin-right:20px">Normal</span>
                <span style="display:inline-block;width:90px;height:40px; border-radius:20px; line-height:40px;border:1px solid #ccc; text-align:center; margin-right:20px">Circle</span>

    </div>
     <div class="style1">
           <div><h2>icon按钮</h2></div>
         <span class="aa">+ Add</span>
         <span class="bb icon-pencil1"> 编辑</span>
         <span class="cc icon-question"> 帮助</span>
         <span class="dd icon-link" style=" border-radius: 20px"> 绑定</span>
         <span class="ee icon-cancel-circle" style=" border-radius: 20px"></span>
         
    </div>
  </div>
</template>

<script>
export default {
 
};
</script>

<style  scoped>
.style1{
  margin: 15px;
}
.style1 span {
  text-align: center;
  line-height: 40px;
  display: inline-block;
  width: 80px;
  height: 36px;
  border: 1px solid #ccc;
  margin: 15px;
  border-radius: 3px;
}
.aa:hover{
  border: 1px solid blue;

}
.bb{
  background-color: rgb(74, 144, 226);
  color: aliceblue;
}
.cc{
  background-color: rgb(227, 125, 41);
  color: aliceblue;

}
.dd{
  background-color: rgb(222, 80, 78);
  color: aliceblue;

}
.ee{
  background-color: rgb(71, 183, 71);
  color: aliceblue;
}
.bb:hover{
 opacity: 0.8;
}
.cc:hover{
 opacity: 0.8;
}
.ee:hover{
 opacity: 0.8;
}
.dd:hover{
 opacity: 0.8;
}
.style2 span{
  cursor: not-allowed;
  opacity: .5;
}
</style>