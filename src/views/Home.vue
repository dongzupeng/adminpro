<!--
 * @Author: your name
 * @Date: 2020-12-04 10:44:01
 * @LastEditTime: 2020-12-08 18:01:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \adminpro\src\views\Home.vue
-->
<template>
  <div class="box">
    111
    <demo1 class="item"/>
    <demo2 class="item"/>
    <demo3 class="item"/>
    <demo4 class="item"/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import demo1 from "../components/demo1.vue";
import demo2 from "../components/demo2.vue";
import demo3 from "../components/demo3.vue";
import demo4 from "../components/demo4.vue";

export default {
  name: "Home",
  components: {
    demo1,
    demo2,
    demo3,
    demo4
  },
};
</script>
<style lang="scss" scoped>
.box {
   .item{
     margin: 20px;
   }
}
</style>
