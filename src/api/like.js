import axios from '../util/axios'
class LikeApi extends axios {
  /**
   * 点赞 or 取消点赞
   */
  like (likeOrCancel, artId, type) {
    let url = likeOrCancel === 'cancel' ? '/like/cancel' : 'like'
    return this.request({
      url: url,
      method: 'POST',
      data: {
        art_id: artId,
        type: type
      }
    })
  }
}
export default new LikeApi()
