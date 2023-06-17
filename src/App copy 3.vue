<template>
  <div class="box">
    <hq-rate 
      disabled-void-icon-class="el-icon-star-off" 
      disabled
      disabled-void-color="#71707e"
      :colors="['#71707e', '#71707e', '#71707e']"
      allow-half
      v-model="value1" 
    />

    <img @mousedown="active = true" @touchstart="active = true" @touchend="active = false" @mouseup="active = false" :class="['btn', { 'active': active }]" src="~@/assets/pointer.2b75f14.png" alt="">
  </div>
</template>

<script>
  import HqRate from '@/components/rate/index'
  export default {
    components: {
      HqRate
    },
    data() {
      return {
        value1: 4.6,
        active: false
      }
    }
  }
</script>

<style scoped>
.box {
  text-align: center;
  padding-top: 100px;
}
.btn {
  cursor: pointer;
  width: 50px;
  transition: all 0.2s ease;
  /* box-shadow: 0px 0px 20px #888888;  */
  /* box-shadow: 0px 0px 0px 1px #4e8381 inset, 0px 0px 0px 2px #74b6b4 inset, 0px 4px 0px 0px #4a7c7b, 0px 5px 0px 0px #355655, 0px 8px 0px 0px rgba(0,0,0,.15); */

}
.btn:active {
  transform: scale(0.8);
}
</style>