<!--
 * @Author: your name
 * @Date: 2020-12-08 11:22:30
 * @LastEditTime: 2021-03-30 12:27:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \adminpro\src\components\demo4.vue
-->
<template>
    <div>

        <div class="poptip btn" aria-controls="弹出气泡">1111</div>
        <div>3333</div>
        <div class="poptip btn" aria-controls="弹出气泡">222</div>
        <div>444</div>
    </div>
</template>

<script>
    export default {
        name:'demo4'
    }
</script>

<style lang="scss" scoped>
$poptipBg: #30363d;
$color: #fff;
$triangle: 8px;
$distance: -12px;
.poptip {
  position: relative;
  z-index: 101;
  &::before,
  &::after {
    visibility: hidden;
    opacity: 0;
    transform: translate3d(0, 0, 0);
    transition: all 0.3s ease 0.2s;
    box-sizing: border-box;
  }
  &::before {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: $triangle $triangle 0 $triangle;
    border-color: $poptipBg transparent transparent transparent;
    left: calc(50% - #{$triangle});
    top: 0px;
    transform: translateX(0%) translateY($distance);
  }

  &::after {
    font-size: 14px;
    color: $color;
    content: attr(aria-controls);
    position: absolute;
    padding: 6px 12px;
    white-space: nowrap;
    z-index: -1;
    left: 50%;
    bottom: 100%;
    transform: translateX(-50%) translateY($distance);
    background: $poptipBg;
    line-height: 1;
    border-radius: 2px;
  }
  &:hover::before,
  &:hover::after {
    visibility: visible;
    opacity: 1;
  }
}

.btn {
  min-width: 100px;
  line-height: 1.5;
  padding: 5px 10px;
  color: #fff;
  background: #00adb5;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
}
</style>
