<template>
  <div class='table'>
    <table cellspacing='0' >
      <tr>
        <th>课程</th>
        <th>类型</th>
        <th>描述</th>
      </tr>
      <tr  :class="{change:index%2==0}" v-for="(item,index) in 5" :key="index" style=" text-align:center; ">
        <td>《前端快速精通》</td>
        <td>语言类</td>
        <td>前端速成教程</td>
      </tr>
    </table>
  
    <div class="next">
     <div> &lt; </div>
     <div> 1 </div>
     <div> 2 </div>
     <div style="background-color:#5d9ce4 ;color:white"> 3 </div>
     <div> 4 </div>
     <div> 5 </div>
     <div> &gt; </div>    
     
      <span style="margin-left:20px; width:80px;height:36px; display:inline-block;line-height:36px">每页条数</span>
      <select name="page" id="1" style="width:100px;font-size:20px;outline:none; ">
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
      </select>
      <span style="margin: 0 20px; height:36px; display:inline-block;line-height:36px">跳转到</span>
      <input type="text" value="3" style="width:50px ;text-align:center;background-color:rgb(244, 245, 250) ;outline:none; border:1px solid #ccc;font-size:18px">
     <div > &gt; </div>
    
    </div>
    


  </div>
</template>

<script>
import {ref,onMounted} from 'vue'
export default {
  setup(props) {
    let isshow= ref('')
    let ref1 = ref()

    return{
      isshow,ref1
    }
  }
};
</script>

<style  scoped>
tr th,tr td {
width: 200px;
height: 45px;
}
td{
border-top:1px solid #ccc ;
}
.change{
  background-color: rgb(244, 246, 250);
}
tr:hover{
  background-color: white!important;
}
.next{
  display: flex;
  margin: 100px;
}
.next div{
  width: 36px;
  height: 36px;
  border: 1px solid #ccc;
  text-align: center;
  line-height: 36px;
  font-size: 18px;
  margin: 0 5px;
  border-radius: 3px;
}
.next div:hover{
  border: #5d9ce4 1px solid;
  color: #5d9ce4;
}

</style>