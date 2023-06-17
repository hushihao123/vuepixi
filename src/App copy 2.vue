<template>
  <div class="box">
    <img 
      @mousedown="active = true" 
      @touchstart="active = true"
      @touchend="active = false" 
      @mouseup="active = false"
      :class="['btn', { 'active': active }]" 
      src="~@/assets/pointer.2b75f14.png" alt=""
    >
  </div>
</template>

<script>
  export default {
    data() {
      return {
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
.btn:hover {
  transform: scale(1.3);
}
.btn.active:hover {
  transform: scale(1);
}
</style>