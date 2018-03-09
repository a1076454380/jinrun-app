Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 地图
    markers: [{
      iconPath: "../img/icon.png",
      id: 0,
      latitude: 22.5669,
      longitude: 113.8959,
      width: 25,
      height: 32
    }],
    information:{
      address:'深圳市宝安区宝通大厦26楼',
      landline:'0755-2652364',
      iphone: 13564522258,
      contact:'刘小姐'
    }
  },
  landline:function(){
    wx.makePhoneCall({
      phoneNumber: this.data.landline //仅为示例，并非真实的电话号码
    })
  },
  iphone:function(){
    wx.makePhoneCall({
      phoneNumber: this.data.iphone //仅为示例，并非真实的电话号码
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})