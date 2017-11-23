const app = getApp()

Page({
  data: {
    slides: null,
  },
  onLoad () {
    // 数据来源还可以全局数据  globalData
    // console.log(app.globalData.slides);
    this.setData({
      slides: app.globalData.slides,
    })
  }
})
