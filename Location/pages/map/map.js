// pages/map/map.js
var QQMapWX = require('../../libs/qqmap-wx-jssdk.js')
var key = '3D6BZ-DRFWP-ACLDM-LXVY5-OVDJK-HOF2Z'

Page({
  qqmapsdk: new QQMapWX({
    key: key
  }),
  data: {
    mapw: '100%',
    maph: '0',
    scale: '18',
    longitude: null,
    latitude: null,
    markers: null
  },
  markIndex: 0,
  mapCtx: null,
  onLoad: function () {
    this.mapCtx = wx.createMapContext('map')
    // 获取窗口的宽度和高度
    wx.getSystemInfo({
      success: res => {
        var mapw = res.windowWidth
        var maph = res.windowHeight
        this.setData({
          maph: maph + 'px',
          controls: [{
            id: 1,
            iconPath: '/images/banner.png',
            position: {
              left: 0,
              top: 10,
              width: mapw,
              height: 74
            },
            clickable: true
          }, {
            id: 2,
            iconPath: '/images/gps.png',
            position: {
              left: 10,
              top: maph - 50,
              width: 40,
              height: 40
            },
            clickable: true
          }, {
            id: 3,
            iconPath: '/images/gift.png',
            position: {
              left: mapw - 60,
              top: maph - 120,
              width: 40,
              height: 40
            },
            clickable: true
          }, {
            id: 4,
            iconPath: '/images/cost.png',
            position: {
              left: mapw - 60,
              top: maph - 50,
              width: 40,
              height: 40
            },
            clickable: true
          }]
        })
      }
    })
  },
  // 获取当前位置(经纬度)
  onReady: function () {
    wx.getLocation({
      type: 'gcj02',
      success: res => {
        this.setData({
          longitude: res.longitude,
          latitude: res.latitude
        })
      }
    })
  },
  getFood: function (longitude, latitude) {
    this.qqmapsdk.search({
      keyword: '餐厅',
      location: {
        longitude: longitude,
        latitude: latitude
      },
      success: res => {
        console.log(res.data)
        var mark = []
        for (let i in res.data) {
          mark.push({
            iconPath: '/images/food.png',
            id: i,
            latitude: res.data[i].location.lat,
            longitude: res.data[i].location.lng
          })
        }
        mark.push({
          iconPath: '/images/center.png',
          id: res.data.length,
          latitude: latitude,
          longitude: longitude
        })
        // 将搜索结果显示在地图上
        this.setData({
          markers: mark
        })
      }
    })
  },

  bindControlTap: function (e) {
    var id = e.controlId
    if (id === 1) {
      wx.navigateTo({
        url: '/pages/coupon/coupon'
      })
    } else if (id === 2) {
      this.mapCtx.moveToLocation()
    }
  },

  bindRegionChange: function (e) {
    if (e.type === 'end') {
      this.mapCtx.getCenterLocation({
        success: res => {
          this.getFood(res.longitude, res.latitude)
        }
      })
    }
  }
})