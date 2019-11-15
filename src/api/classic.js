import axios from '../util/axios'
class ClassiApi extends axios {
  /**
   * 获取最新一期内容
   */
  getLatest () {
    return this.request({
      url: '/classic/latest'
    })
  }
  getClassic (index, nextOrPrevious) {
    return this.request({
      url: 'classic/' + index + '/' + nextOrPrevious
    })
  }
  /**
   * 是否是最早一期
   * @param {期数} index
   */
  getIsFirst (index) {
    /* eslint-disable */
    return index === 1 ? true : false
  }
  /**
   * 是否是最新一期
   * @param {期数} index
   */
  getIsLatest (index) {
    /* eslint-disable */
    let first = localStorage.getItem('latest')
    return index == first ? true : false
  }
  /**
   * 获取classic 缓存的key
   */
  _getKey(index) {
    let key = 'classic-' + index;
    return key
  }
}
export default new ClassiApi()
