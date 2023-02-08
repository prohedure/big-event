<template>
  <div class="all">
    <div class="up" :style="'color:' + color">
      <slot name="num">123</slot>
      <span class="upUnit"><slot>p</slot></span>
    </div>
    <div class="down"><slot name="leibie">type</slot></div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['color']
}
</script>

<style lang="less" scoped>
.all {
  height: 80px;
}
.up {
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: x-large;
  .upUnit {
    // background-color: pink;
    font-size: small;
  }
}
.down {
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  background-color: rgb(211, 220, 230);
  text-align: center;
  color: rgb(0, 0, 0);
}
</style>
