<template>
  <div class='box'>
    <div class="div1">
      <ul>
        <li>
          <span class="span1">1</span>
          准备
           <span class="span2"></span>
        </li>
         <li>
          <span class="span1">2</span>
          编译
          <span class="span2"></span>
        </li>
         <li>
          <span class="span1">3</span>
          制作镜像
          <span class="span2"></span>
        </li>
         <li>
          <span class="span1 ">4</span>
          镜像入库
           <span class="span2 span4"></span>
        </li>
         <li class="li5">
          <span class="span1 span5">5</span>
          部署
        </li>
      </ul>
    </div>
  <div class="div1" style="margin-top:50px">
      <ul>
        <li>
          <span class="span1">1</span>
          准备
           <span class="span2"></span>
        </li>
         <li>
          <span class="span1 span11" style="color:white"> <i style="position:relative;z-index:9">√</i> </span>
          编译
          <span class="span2"></span>
        </li>
         <li>
          <span class="span1 span11" style="color:white"><i style="position:relative;z-index:9">×</i></span>
          制作镜像
          <span class="span2"></span>
        </li>
         <li>
          <span class="span1 ">4</span>
          镜像入库
           <span class="span2 span4"></span>
        </li>
         <li class="li5">
          <span class="span1 span5">5</span>
          部署
        </li>
      </ul>
    </div>
    <div class="div1" style="margin-top:50px">
      <ul>
        <li>
          <span class="span1">1</span>
          准备
           <span class="span2"></span>
        </li>
         <li style="color:green">
          <span class="span1 span11 span12" style="color:white"> <i style="position:relative;z-index:9">√</i> </span>
          编译
          <span class="span2"></span>
        </li>
         <li style="color:red">
          <span class="span1 span11 span13" style="color:white"><i style="position:relative;z-index:9">×</i></span>
          制作镜像
          <span class="span2"></span>
        </li>
         <li>
          <span class="span1 ">4</span>
          镜像入库
           <span class="span2 span4"></span>
        </li>
         <li class="li5">
          <span class="span1 span5">5</span>
          部署
        </li>
      </ul>
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
.div1{
  width: 80%;
  height: 12vh;
  border:2px solid #ccc;
}
.div1:hover{
  box-shadow: 2px 2px 2px 2px #ccc;
}
ul{
  display: flex;
   padding:0;
 
}
ul li{
  flex: 1;
  list-style: none;
  color: rgb(74, 144, 226);
}
ul .li5{
  color: black;
}
.li5 .span5::after{
  border: 2px solid #ccc;
  
}
.span1{
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #ccc;
  text-align: center;
  line-height: 40px;
  position: relative;
  margin-right: 5px;
}
.span1::after{
content: "";
position: absolute;
width: 26px;
height: 26px;
 border-radius: 50%;
  border: 2px solid rgb(74, 144, 226);
  top: 5px;
  right: 5px;
}
.div1 .span11::after{
background-color: rgb(74, 144, 226);
}
.div1 .span12::after{
background-color: green;
 border: 2px solid green;
}
.div1 .span13::after{
background-color: red;
 border: 2px solid red;
}

.span2{
  width: 25%;
  height: 5px;
  display: inline-block;
  background-color: rgb(74, 144, 226);
  position: relative;
  top: -3px;
}
.span4{
  background-color: #ccc;
}

.span2::after{
content: "";
  position: absolute;
  border-bottom: 8px solid transparent ;
  border-top: 8px solid transparent ;
  border-right: 8px  solid transparent ;
  border-left: 8px  solid rgb(74, 144, 226);
  width: 0;
  height: 0;
  top: -5px;
  right: -16px;
}
.span4::after{
  border-left: 8px solid #ccc;
}
</style>