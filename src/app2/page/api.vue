<template>
  <div class=''>
    <h2>说明</h2>
  </div>
</template>

<script>
import {onActivated} from 'vue'
export default {
 setup(props) {
   onActivated(()=>{
     console.log(132);
   })
 }
};
</script>

<style  scoped>

</style>