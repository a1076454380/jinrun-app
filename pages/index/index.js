Page({

  /**
   * 页面的初始数据
   */
  data: {
    index:{
      swiper:[
        '../img/index01.png',
        '../img/index01.png',
        '../img/index01.png',
        '../img/index01.png'
      ],
      nav:[
        { src: '../img/index_03.png', title: '企业简介', url:'../Jjie/Jjie'},
        { src: '../img/index_05.png', title: '产品介绍', url: '../Jshao/Jshao' },
        { src: '../img/index_07.png', title: '联系我们', url: '../Lxi/Lxi' },
        { src: '../img/index_12.png', title: '新闻动态', url: '../Xwen/Xwen' },
        { src: '../img/index_13.png', title: '意见反馈', url: '../Fkui/Fkui' },
        { src: '../img/index_14.png', title: '服务帮助', url: '../Bzhu/Bzhu' }
      ],
      goods:[
        { 
          src: ['../img/index02.png', '../img/index02.png'],
          title: '京润珍珠粉面膜',
          xqing: '美白补水保湿淡斑提亮肤色',
          id: '001', 
          text:' 京润珍珠粉美白补水面膜哑银色包装，非常有质感，较 为薄透的面膜材质，内含的精华液为滋润的白色乳液质地， 非常柔润顺' 
        }, {
          src: ['../img/index02.png', '../img/index02.png'],
          title: '京润珍珠粉面膜',
          xqing: '美白补水保湿淡斑提亮肤色',
          id: '002',
          text: ' 京润珍珠粉美白补水面膜哑银色包装，非常有质感，较 为薄透的面膜材质，内含的精华液为滋润的白色乳液质地， 非常柔润顺'
        }, {
          src: ['../img/index02.png', '../img/index02.png'],
          title: '京润珍珠粉面膜',
          xqing: '美白补水保湿淡斑提亮肤色',
          id: '003',
          text: ' 京润珍珠粉美白补水面膜哑银色包装，非常有质感，较 为薄透的面膜材质，内含的精华液为滋润的白色乳液质地， 非常柔润顺'
        }, {
          src: ['../img/index02.png', '../img/index02.png'],
          title: '京润珍珠粉面膜',
          xqing: '美白补水保湿淡斑提亮肤色',
          id: '004',
          text: ' 京润珍珠粉美白补水面膜哑银色包装，非常有质感，较 为薄透的面膜材质，内含的精华液为滋润的白色乳液质地， 非常柔润顺'
        }  
      ]
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that=this
    wx.request({
      url: '',
      header:{
        'ContentType':JSON
      },
      success:function(res){
          that.setData({
            index:res.data
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