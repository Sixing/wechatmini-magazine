// components/articleList/cmp.js
import { IndexModel } from '../../models/index.js'
import {SearchModel} from '../../models/search.js'

const searchModel = new SearchModel();
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

    word: String,

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
    noMoreData: false,
    type: ''
  },

  attached() {
    const curPages = getCurrentPages();
    const index = curPages.length -1;
    let type = 'search'
   
   if(curPages[index].route == 'pages/search/search') {
     type = 'search'

   }else {
     type = 'index'
   }

   this.setData({
     type
   })

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
      this.getMoreData()
    },

    getMoreData() {
      const start = this.properties.articleList.length
      let getMore = null;

      if (this.data.type == 'search'){
        const word = this.data.word;
        getMore = searchModel.getSearchArticleList(word, start);
      }else {
        const magzineId = this.properties.magzineId
        getMore = getArticleList(magzineId, start);
      }

      getMore.then(res => {
        this._setMoreData(res)
        this._unLock()
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

    _setMoreData(data) {
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
