// pages/weather/weather.js
var ak = 'rou03iY0SkGW3CvaDSMbbLL5nCanZlFp'
var defaultcity, getweather, gettemp, getwind, getpic, getdate
Page({
  bindKeyInput: function (e) {
    defaultcity = e.detail.value
  },
  search: function (e) {
    var that = this
    wx.request({
      url: 'https://api.map.baidu.com/telematics/v3/weather?output=json&ak=' + ak + '&location=' + defaultcity,
      success: res => {
        console.log(res.data)
        if (!res.data.results) {
          console.log('获取天气接口失败')
          return
        }
        getweather = res.data.results[0].weather_data[0].weather
        gettemp = res.data.results[0].weather_data[0].temperature
        getwind = res.data.results[0].weather_data[0].wind
        getpic = res.data.results[0].weather_data[0].dayPictureUrl
        getdate = res.data.results[0].weather_data[0].date
        this.setData({
          city: defaultcity,
          weather: getweather,
          temp: gettemp,
          wind: getwind,
          pic: getpic,
          date: getdate
        })
      }
    })
  }
})