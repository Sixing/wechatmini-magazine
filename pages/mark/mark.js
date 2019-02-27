// pages/mark/mark.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    authorized: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSetting({
      success: res => {
        if(res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: res => {
              console.log(res.userInfo)
              this.setData({
                userInfo: res.userInfo,
                authorized: true
              })
            }
          })
        }
      }
    })
  },

  onGetUserInfo(e) {
    const userInfo = e.detail.userInfo
    console.log(e)
    if(userInfo) {
      this.setData({
        userInfo: userInfo,
        authorized: true
      })
    }
  }
})