Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:0,
    Jjie:[
      {
        'name':'关于企业',
        'title':' 欧丽雅面膜有限公司',
        'subtitle':' Oriya suit co,LTD',
        'text':[
          '欧丽雅有限公司成立于1999年，是一家专业从事智能语音及语言技术、人工智能技术研究，软件及芯片产品开发， 语言信息服务及电子政务系统集成的国家级骨干软件企业。2008年，欧丽雅在深圳证券交易所挂牌上市，股票代码：002230。',
          '人工智能主要分为计算机智能、感知智能、认知智能 计算智能，即机器“能存会算”的能力；感知智能，即机器具有“能挺会说、能看会认”的能力，主要涉及语音合成、语音识别、多语种语音处理等技术；认知智能，即机器具 有“能理解会思考”的能力，主要涉及教育评测、知识服务、 智能客服、机器翻译等技术。'
        ]
      },
      {
        'name': '企业文化',
        'title': ' 企业文化',
        'subtitle': ' Oriya suit co,LTD',
        'text': [
          '欧丽雅有限公司成立于1999年，是一家专业从事智能语音及语言技术、人工智能技术研究，软件及芯片产品开发， 语言信息服务及电子政务系统集成的国家级骨干软件企业。2008年，欧丽雅在深圳证券交易所挂牌上市，股票代码：002230。',
          '  人工智能主要分为计算机智能、感知智能、认知智能 计算智能，即机器“能存会算”的能力；感知智能，即机器具有“能挺会说、能看会认”的能力，主要涉及语音合成、语音识别、多语种语音处理等技术；认知智能，即机器具 有“能理解会思考”的能力，主要涉及教育评测、知识服务、 智能客服、机器翻译等技术。'
        ]
      },
      {
        'name': '荣誉证书',
        'title': ' 荣誉证书',
        'subtitle': ' Oriya suit co,LTD',
        'text': [
          '欧丽雅有限公司成立于1999年，是一家专业从事智能语音及语言技术、人工智能技术研究，软件及芯片产品开发， 语言信息服务及电子政务系统集成的国家级骨干软件企业。2008年，欧丽雅在深圳证券交易所挂牌上市，股票代码：002230。',
          '  人工智能主要分为计算机智能、感知智能、认知智能 计算智能，即机器“能存会算”的能力；感知智能，即机器具有“能挺会说、能看会认”的能力，主要涉及语音合成、语音识别、多语种语音处理等技术；认知智能，即机器具 有“能理解会思考”的能力，主要涉及教育评测、知识服务、 智能客服、机器翻译等技术。'
        ]
      },
      {
        'name': '公司架构',
        'title': ' 公司架构',
        'subtitle': ' Oriya suit co,LTD',
        'text': [
          '欧丽雅有限公司成立于1999年，是一家专业从事智能语音及语言技术、人工智能技术研究，软件及芯片产品开发， 语言信息服务及电子政务系统集成的国家级骨干软件企业。2008年，欧丽雅在深圳证券交易所挂牌上市，股票代码：002230。',
          '  人工智能主要分为计算机智能、感知智能、认知智能 计算智能，即机器“能存会算”的能力；感知智能，即机器具有“能挺会说、能看会认”的能力，主要涉及语音合成、语音识别、多语种语音处理等技术；认知智能，即机器具 有“能理解会思考”的能力，主要涉及教育评测、知识服务、 智能客服、机器翻译等技术。'
        ]
      }
    ]
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

      }
    })
  },
  SwitchTap:function(e){
    let num=e.target.dataset.num
    console.log(num)
    this.setData({
      num:num
    })
  }
})