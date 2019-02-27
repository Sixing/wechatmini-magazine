// components/nineImg/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    imgArr: Array
  },

  /**
   * 组件的初始数据
   */
  data: {
    imgArr: ["https://scontent-hkg3-1.cdninstagram.com/vp/138ae233f4696b2a6868c726093b27cf/5CECAD8A/t51.2885-15/e35/50094058_768498860199877_2491484377258720259_n.jpg?_nc_ht=scontent-hkg3-1.cdninstagram.com",
      "https://scontent-hkg3-1.cdninstagram.com/vp/138ae233f4696b2a6868c726093b27cf/5CECAD8A/t51.2885-15/e35/50094058_768498860199877_2491484377258720259_n.jpg?_nc_ht=scontent-hkg3-1.cdninstagram.com",
      "https://scontent-hkg3-1.cdninstagram.com/vp/138ae233f4696b2a6868c726093b27cf/5CECAD8A/t51.2885-15/e35/50094058_768498860199877_2491484377258720259_n.jpg?_nc_ht=scontent-hkg3-1.cdninstagram.com",
      "https://scontent-hkg3-1.cdninstagram.com/vp/138ae233f4696b2a6868c726093b27cf/5CECAD8A/t51.2885-15/e35/50094058_768498860199877_2491484377258720259_n.jpg?_nc_ht=scontent-hkg3-1.cdninstagram.com",
      "https://scontent-hkg3-1.cdninstagram.com/vp/138ae233f4696b2a6868c726093b27cf/5CECAD8A/t51.2885-15/e35/50094058_768498860199877_2491484377258720259_n.jpg?_nc_ht=scontent-hkg3-1.cdninstagram.com",
      "https://scontent-hkg3-1.cdninstagram.com/vp/138ae233f4696b2a6868c726093b27cf/5CECAD8A/t51.2885-15/e35/50094058_768498860199877_2491484377258720259_n.jpg?_nc_ht=scontent-hkg3-1.cdninstagram.com",
      "https://scontent-hkg3-1.cdninstagram.com/vp/138ae233f4696b2a6868c726093b27cf/5CECAD8A/t51.2885-15/e35/50094058_768498860199877_2491484377258720259_n.jpg?_nc_ht=scontent-hkg3-1.cdninstagram.com",
      "https://scontent-hkg3-1.cdninstagram.com/vp/138ae233f4696b2a6868c726093b27cf/5CECAD8A/t51.2885-15/e35/50094058_768498860199877_2491484377258720259_n.jpg?_nc_ht=scontent-hkg3-1.cdninstagram.com",
      "https://scontent-hkg3-1.cdninstagram.com/vp/138ae233f4696b2a6868c726093b27cf/5CECAD8A/t51.2885-15/e35/50094058_768498860199877_2491484377258720259_n.jpg?_nc_ht=scontent-hkg3-1.cdninstagram.com"]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTap(e) {
      const index = e.currentTarget.dataset.index;
      wx.previewImage({
        urls: this.data.imgArr,
        current: this.data.imgArr[index],
      })
    }
  }
})
