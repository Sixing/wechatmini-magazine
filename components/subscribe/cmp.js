// components/subscribe/cmp.js

import {Subscribe} from '../../models/subscribe.js'
const subscribeModel = new Subscribe();

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tag: String,
    tagId: Number
  },

  attached() {
    this.judgeTag()
  },

  /**
   * 组件的初始数据
   */
  data: {
    class: "common",
    myTagList: []
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTap(e) {
      const mark = {
        tag: this.properties.tag,
        tagId: this.properties.tagId
      }

      if(this.data.class == 'common'){
        const myTagList = this.getMyTagList();
        myTagList.push(mark)
        subscribeModel.setMyTagList(myTagList)
      }else {
        subscribeModel.removeMyTag(mark.tagId)
      }
      this.toggleClass()
      this.triggerEvent('tap')
    },

    getMyTagList() {
      const myTagList = subscribeModel.getMyTagList();
      this.setData({
        myTagList
      })
      return myTagList
    },

    judgeTag(){
      const myTagList = this.getMyTagList()
      myTagList.forEach((item, index) => {
        if(item.tagId == this.properties.tagId){
          this.setData({
            class: 'subscribe'
          })
        }
      })
    },

    toggleClass() {
      let className = ''
      if (this.data.class == 'common') {
        className = 'subscribe'
      } else {
        className = 'common'
      }

      this.setData({
        class: className
      })
    }
  }
})
