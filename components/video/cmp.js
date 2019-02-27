// components/video/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    src: String,
    poster: String,
    duration: String,
    mainTitle: String,
    videoId: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    showPoster: true
  },
  //不能使用created函数，因为created函数里面不能设置/使用data里面的值
  //lifttime 里面的生命周期函数的优先级最高
  lifetimes: {
    attached() {
      this._getVideoInfo();
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onPlay() {
      this._toggleVideoPoster();
      this.video.play();
    },
    onMaskTap() {
      this._toggleVideoPoster();
      //防止不重头播放
      this.video.seek(0);
      this.video.stop();
    },
    onVideEnd() {
      this._toggleVideoPoster();
    },
    _getVideoInfo() {
      const id = this.properties.videoId;
      this.video = wx.createVideoContext(id, this);
    },
    _toggleVideoPoster() {
      this.setData({
        showPoster: !this.data.showPoster
      })
    }
  }
})
