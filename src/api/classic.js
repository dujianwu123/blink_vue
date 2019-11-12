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
}
export default new ClassiApi()
