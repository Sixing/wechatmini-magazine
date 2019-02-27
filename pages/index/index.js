//index.js
//获取应用实例
const app = getApp();
import { IndexModel } from '../../models/index.js';
//import { random } from '../../utils/rendomStr.js';
const indexModel = new IndexModel();

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    articleList: [],
    markList: [], 
    recommand: {},
    magzineId: 0,
    getMore: '',
    loading: true

  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    this.getData();
  },

  onReachBottom() {
    this.setData({
      getMore: '' + +new Date()
    })
  },
  getData( magazineId) {
    const article = indexModel.getArticleList(magazineId)
    const getMarkList = indexModel.getArticleList(magazineId)
    const getRecommand = indexModel.getRecommendInfo(magazineId)

    Promise.all([article, getMarkList, getRecommand]).then(res => {
      this.setData({
        articleList: res[0],
        markList: res[1],
        recommand: res[2]
      })
      this.hideLoading()
    })
  },
  onCatalog() {
    wx.switchTab({
      url: '/pages/catalog/catalog',
    })
  },
  hideLoading() {
    this.setData({
      loading: false
    })
  },
  onNav(e) {
    const magazineId = e.detail.index;

    this.setMagazineId(magazineId)

    this.resetData()

    this.getData(magazineId)

    this.scrollPageToTop()
  },
  resetData() {
    this.setData({
      articleList: [],
      markList: [],
      recommand: {},
    })
  },

  scrollPageToTop() {
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 0
    })
  },

  setMagazineId(magazineId) {
    this.setData({
      magazineId
    })
  }
})
