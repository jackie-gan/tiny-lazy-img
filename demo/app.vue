<template>
  <div class="container">
    <div class="line1">
      <template v-for="(item, index) of imgArr">
        <lazy-img :key="index" :src="item" />
      </template>
    </div>
    <div class="line2">
      <template v-for="(item, index) of imgArr">
        <lazy-img-obs :key="index" :src="item" />
      </template>
    </div>
  </div>
</template>
<script>
import LazyImg from '../src/lazy-img-scroll/comp';
import LazyImgObs from '../src/lazy-img-observer/comp';
import LazyImgScroll from '../src/lazy-img-scroll';
import LazyImgObserver from '../src/lazy-img-observer';

export default {
  components: {
    LazyImg,
    LazyImgObs
  },
  data() {
    return {
    };
  },
  computed: {
    imgArr() {
      return Array.apply(null, Array(100)).map(() => 'https://img.yzcdn.cn/vant/cat.jpeg');
    }
  },
  mounted() {
    const lis = new LazyImgScroll();
    lis.init();
    const lio = new LazyImgObserver();
    lio.init();
  }
};
</script>
<style lang="scss">
body {
  height: 100%;
}
.container {
  color: green;
  overflow-y: scroll;
}
.line1 {
  width: 40%;
  float: left;
}
.line2 {
  width: 40%;
  float: left;
}
</style>