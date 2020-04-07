class LazyLoad {
  constructor() {
    this.timmerId = null;
    this.clientHeight = document.documentElement.clientHeight;
    this.loadedIndex = 0;
  }

  handleLoadImg() {
    const imgs = document.getElementsByClassName("lazy-img");
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    for (let i = this.loadedIndex; i < imgs.length; i++) {
      if (imgs[i].offsetTop < this.clientHeight + scrollTop) {
        if (!imgs[i].getAttribute('src')) {
          imgs[i].setAttribute('src', imgs[i].getAttribute('data-src'));
        }
        this.loadedIndex = i + 1;
      }
    }
  }

  init() {
    window.addEventListener('scroll', () => {
      clearTimeout(this.timmerId);
      this.timmerId = setTimeout(() => {
        this.handleLoadImg();
      }, 1000);
    });
    this.handleLoadImg();
  }
}

export default LazyLoad;
