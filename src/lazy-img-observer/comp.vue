<template>
  <div class="img-container">
    <img class="lazy-img-observer" ref="img" :data-src="src" />
  </div>
</template>
<script>
export default {
  props: {
    src: {
      type: String,
      default: ''
    }
  }
};
</script>
<style lang="scss">
.img-container {
  .lazy-img-observer {
    background-color: #808080;
    width: 100px;
    height: 100px;
  }
}
</style>