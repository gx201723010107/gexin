// pages/detail/detail.js
Page({

  /**
   * Page initial data
   */
  data: {
    gender: '男',
    username: '张厚今',
    imgUrl: "/images/zhj.png"
  },
  changeAvatar: function () {
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: res => {
        // tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
        this.setData({
          imgUrl: tempFilePaths
        })
      }
    })
  },

  jump: function (e) {
    // 跳转到“个人资料修改页”
    wx.navigateTo({
      // 为了避免用户名中的特殊字符破坏字符串结构，使用encodeURIComponent()编码
      url: '/pages/modify/modify?username=' + encodeURIComponent(this.data.username) + '&gender=' + encodeURIComponent(this.data.gender)
      
    })
    // console.log('sd')
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})