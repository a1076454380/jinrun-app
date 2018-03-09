Page({

  /**
   * 页面的初始数据
   */
  data: {
    animationData: {},
    news:[
      {
        id:'001',
        img:[
          '../img/Xwen.png',
          '../img/Xwen.png'
        ],
        title:'京润珍珠粉美白补水面膜受到消费者的喜爱',
        text:[
          '京润珍珠粉美白补水面膜哑银色包装，非常有质感，较 为薄透的面膜材质，内含的精华液为滋润的白色乳液质地， 非常柔润顺 副本',
          '京润珍珠粉美白补水面膜哑银色包装，非常有质感，较 为薄透的面膜材质，内含的精华液为滋润的白色乳液质地， 非常柔润顺 副本'
        ],
        source:'公司新闻',
        data:'10分钟前'
      }, {
        id: '002',
        img: [
          '../img/Xwen.png',
          '../img/Xwen.png'
        ],
        title: '京润珍珠粉美白补水面膜受到消费者的喜爱',
        text: [
          '京润珍珠粉美白补水面膜哑银色包装，非常有质感，较 为薄透的面膜材质，内含的精华液为滋润的白色乳液质地， 非常柔润顺 副本',
          '京润珍珠粉美白补水面膜哑银色包装，非常有质感，较 为薄透的面膜材质，内含的精华液为滋润的白色乳液质地， 非常柔润顺 副本'
        ],
        source: '公司新闻',
        data: '10分钟前'
      }, {
        id: '003',
        img: [
          '../img/Xwen.png',
          '../img/Xwen.png'
        ],
        title: '京润珍珠粉美白补水面膜受到消费者的喜爱',
        text: [
          '京润珍珠粉美白补水面膜哑银色包装，非常有质感，较 为薄透的面膜材质，内含的精华液为滋润的白色乳液质地， 非常柔润顺 副本',
          '京润珍珠粉美白补水面膜哑银色包装，非常有质感，较 为薄透的面膜材质，内含的精华液为滋润的白色乳液质地， 非常柔润顺 副本'
        ],
        source: '公司新闻',
        data: '10分钟前'
      }, {
        id: '004',
        img: [
          '../img/Xwen.png',
          '../img/Xwen.png'
        ],
        title: '京润珍珠粉美白补水面膜受到消费者的喜爱',
        text: [
          '京润珍珠粉美白补水面膜哑银色包装，非常有质感，较 为薄透的面膜材质，内含的精华液为滋润的白色乳液质地， 非常柔润顺 副本',
          '京润珍珠粉美白补水面膜哑银色包装，非常有质感，较 为薄透的面膜材质，内含的精华液为滋润的白色乳液质地， 非常柔润顺 副本'
        ],
        source: '公司新闻',
        data: '10分钟前'
      }, {
        id: '005',
        img: [
          '../img/Xwen.png',
          '../img/Xwen.png'
        ],
        title: '京润珍珠粉美白补水面膜受到消费者的喜爱',
        text: [
          '京润珍珠粉美白补水面膜哑银色包装，非常有质感，较 为薄透的面膜材质，内含的精华液为滋润的白色乳液质地， 非常柔润顺 副本',
          '京润珍珠粉美白补水面膜哑银色包装，非常有质感，较 为薄透的面膜材质，内含的精华液为滋润的白色乳液质地， 非常柔润顺 副本'
        ],
        source: '公司新闻',
        data: '10分钟前'
      }, {
        id: '006',
        img: [
          '../img/Xwen.png',
          '../img/Xwen.png'
        ],
        title: '京润珍珠粉美白补水面膜受到消费者的喜爱',
        text: [
          '京润珍珠粉美白补水面膜哑银色包装，非常有质感，较 为薄透的面膜材质，内含的精华液为滋润的白色乳液质地， 非常柔润顺 副本',
          '京润珍珠粉美白补水面膜哑银色包装，非常有质感，较 为薄透的面膜材质，内含的精华液为滋润的白色乳液质地， 非常柔润顺 副本'
        ],
        source: '公司新闻',
        data: '10分钟前'
      },
   
    ]
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
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: "linear",
      delay: 0,
      transformOrigin: "50% 50%",
    })
    this.animation = animation
    let n=1
    setInterval(function () {
      n++
      this.animation.rotate(180*(n)).step()
      this.setData({
        animationData: this.animation.export()
      })
    }.bind(this), 1000)
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