// components/articleList/cmp.js
import { IndexModel } from '../../models/index.js'
const indexModel = new IndexModel();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    articleList: {
      type: Array,
      value: [],
      observer() {
      }
    },

    more: {
      type: String,
      value: '',
      observer: 'loadMore'
    },

    magzineId: {
      type: Number,
      value: 0,
      observer: 'hasMoreData'
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    loading: false,
    noMoreData: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    loadMore(newVal) {

      if(this._isLock() || this.data.noMoreData) {
        return 
      }

      this._loadLock()

      const magzineId = this.properties.magzineId
      const start = this.properties.articleList.length
      indexModel.getArticleList(magzineId, start).then( res => {
        this._getMoreData(res)
      })
    },

    hasMoreData() {
      this.setData({
        noMoreData: false
      })
    },

    _isLock() {
      return this.data.loading
    },

    _loadLock() {
      this.setData({
        loading: true
      })
    },

    _unLock() {
      this.setData({
        loading: false
      })
    },

    _getMoreData(data) {
      const combinList = this.data.articleList.concat(data)

      if (combinList.length === this.data.articleList.length) {
        this.setData({
          noMoreData: true
        })
        this._unLock()
        return 
      }
      this.setData({
        articleList: combinList
      })
      this._unLock()
    }
  }
})
