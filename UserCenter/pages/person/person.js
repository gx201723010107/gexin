// pages/person/person.js
Page({
  info:function(e){
    wx.navigateTo({
      url: '/pages/detail/detail',
    })
  },
  order: function(e) {
    wx.redirectTo({
      url: '../order/order',
    })
  },
  address: function () {
    wx.navigateTo({
      url: '/pages/address/address',
    })
  },
  contact: function (e) {
    wx.makePhoneCall({
      phoneNumber: '17853807730'  // 我的电话号码
    })
  }
})