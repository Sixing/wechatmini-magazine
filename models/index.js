 import {
   Request
 } from '../utils/request.js'


 class IndexModel extends Request {
   getArticleList(magzineId = 0, start = 0) {
     return this.getData({
       url: `/getIndexArticleList/${magzineId}/${start}`
     })
   }

   getMarkList(magzineId = 0) {
     return this.getData({
       url: `/getMarkTypeList/${magzineId}`
     })
   }

   getRecommendInfo(magzineId = 0) {
     return this.getData({
       url: `/getRecommendInfo/${magzineId}`
     })
   }
 }



 export {
   IndexModel
 }