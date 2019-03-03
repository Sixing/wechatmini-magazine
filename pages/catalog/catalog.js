// pages/catalog/catalog.js
import { tagInfoList } from '../../utils/tagList.js'
import { Subscribe } from '../../models/subscribe.js'
const subscibeModel = new Subscribe()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    tagInfoList: tagInfoList,
    myTagList: [],
    searchWord: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData()
  },

  onShow: function () {
    this.setData({
      searchWord: ''
    })
  },

  getData() {
    const myTagList = subscibeModel.getMyTagList();
    this.setData({
      myTagList
    })
  },

  onSubscribe(e) {
    this.getData()
  }
})