class LazyImgObserver {
  constructor() {
    this.interObs = null;

    this.init();
  }

  init() {
    // 确保渲染完成
    setTimeout(() => {
      this.interObs = new window.IntersectionObserver(this.handler.bind(this), {
        rootMargin: '-100px',
        threshold: [0, 0.25]
      });
      const imgs = document.getElementsByClassName("lazy-img-observer");
      const imgsArr = [].slice.call(imgs, 0);
      imgsArr.forEach(img => {
        this.interObs.observe(img);
      });
    });
  }

  handler(changes) {
    this.taskHandler(() => {
      changes.forEach(change => {
        if (change.isIntersecting || change.intersectionRatio) {
          this.renderImg(change);
        }
      });
    });
  }

  taskHandler(callback) {
    return (window.requestAnimationFrame || (cb => setTimeout(cb, 1000/60)))(callback);
  }

  renderImg(item) {
    const target = item.target;
    if (!target.getAttribute('src')) {
      target.setAttribute('src', target.getAttribute('data-src'));
    }
  }
}

export default LazyImgObserver;
