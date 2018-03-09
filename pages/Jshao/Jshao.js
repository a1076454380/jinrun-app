Page({

  /**
   * 页面的初始数据
   */
  data: {
      good:{
        title:'京润珍珠粉面膜',
        subtitle:'JingRun pearl powder mask',
        text:[
          '京润珍珠粉美白补水面膜哑银色包装，非常有质感，较 为薄透的面膜材质，内含的精华液为滋润的白色乳液质地， 非常柔润顺'
        ],
        img:[
          '../img/Jshao01.png',
          '../img/Jshao02.png'
        ]
      }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id=options.id
    console.log(id)
    if(!id){
        id='001'
    }
    let that=this
    wx.request({
      url: '',
      header:{
        'ContentType':JSON
      },
      success:function(res){
          that.setData({
            good:res.data
          })
      }
    })
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