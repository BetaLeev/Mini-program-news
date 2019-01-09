//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    imgUrls: [
    '../../images/t1.jpg',
      '../../images/t2.jpg',
      '../../images/t3.jpg',
      '../../images/t4.jpg',
      '../../images/t5.jpg'
    ],
    newsMsg:[
      {
        imgUrl:"../../images/1.jpg",
        newsTitle: "2019年韩美林设计《己亥年》猪年生肖特种邮票",
        createTime:"2010-2-2 12:12:12",
        newsDes:"作为国内为数不多的大量创作了“十二生肖”形象的艺术家，韩美林创作的“生肖”作品曾经亮相“韩美林八十大展”以及在威尼斯、巴黎、首尔等地举办的“韩美林全球巡展”，持续引发了国内外观众的强烈关注和热烈反响。"
      },
      {
        imgUrl: "../../images/2.jpg",
        newsTitle: "清华大学“峥嵘一二·九，改革再出发”当代青年主题展举行",
        newsDes: "本次展览展出了来自各院系同学创作七十余件优秀设计作品，作品形式包括歌曲、书法、绘画、模型等，其中涌现出了很多融入当代青年风采和个性的原创作品，体现了“一二·九”精神对清华人的深刻影响和清华学子在新时代中的使命与担当。 "
      },
      {
        imgUrl: "../../images/3.jpg",
        newsTitle: "清华研究生毕业花絮",
        newsDes: "我们感谢母校!感谢母校馈赠我们知识的力量，培养我们创新的意识，塑造我们独立的人格，给予我们舒展的心灵、自由的思想、做人的美德。正是这些丰厚的收获，让我们在踏入社会的同时多了一份自信，多了一种豪情。我们今天这个隆重的集会，不仅是庆贺毕业，更是新征程的开始。"
      },
      {
        imgUrl: "../../images/4.jpg",
        newsTitle: "花明柳媚春意浓",
        newsDes: "四月的清华园里，春意渐浓。在阵阵春风的吹拂下，春花烂漫、嫩柳飘飘，装点着园子的春日芳华。漫步校园，花红柳绿的风景美不胜收。"
      },
      {
        imgUrl: "../../images/5.jpg",
        newsTitle: "春雪清华园",
        newsDes: "漫漫的等待，悄悄的惊喜。清晨，一场飘飘洒洒的春雪给清华园笼罩上了一层圣洁的衣装。"
      }
    ],
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
   

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
