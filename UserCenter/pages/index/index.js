//index.js

Page({
  changeImage: function(e){
    wx.switchTab({
      url: '/pages/person/person',
    })
  }
})
