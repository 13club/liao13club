Page({
  data: {
    selectTabId: 0,
    scrollH: 0,
    scrollW: 0,
    groups: [],
    banners: [],
    courses: [],
    init: false
  },
  onLoad(query) {
    // 页面加载
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);

    this.banners();
    this.init();
  },
  banners() {
    
      let data = [
        {
          // "img": "http://kecheng.fsstudy.com/0ca42df8284d4afe863bac2e8e951f94.png",
          "img": "/static/images/bane1.jpg",
          "imgWidth": 0,
          "banner_type": 1,
          "imgHeight": 0,
          "location": 0,
          "shopid": 1011,
          "bid": 10097,
          "type": 1,
          "url": "",
          "bannerNo": 1,
          "cid": 1161
        },
        {
          // "img": "http://kecheng.fsstudy.com/f5500371a6204db29f3f235a241aaa96.png",
          "img": "/static/images/bane2.jpg",
          "imgWidth": 0,
          "banner_type": 1,
          "imgHeight": 0,
          "location": 0,
          "shopid": 1011,
          "bid": 10098,
          "type": 1,
          "url": "",
          "bannerNo": 2,
          "cid": 1112
        },
        {
          // "img": "http://kecheng.fsstudy.com/228923403f0942c8ac3e412a5aac9706.png",
          "img": "/static/images/bane3.jpg",
          "imgWidth": 0,
          "banner_type": 1,
          "imgHeight": 0,
          "location": 0,
          "shopid": 1011,
          "bid": 10099,
          "type": 1,
          "url": "",
          "bannerNo": 3,
          "cid": 1198
        }
      ]
    
    let dan = data.filter(banner => banner.cid && !banner.url);
    console.log(dan)

    this.setData({ banners:dan  })


  },
  init: function () {

    let data = {
      "pageCount": 2,
      "pageNo": 1,
      "record": [
        {
          "course": {
            "orderNum": 26,
            "baseSubscriber": 0,
            "title": "福利彩票",
            "tid": 1000,
            "price": 10,
            "is_can_use_coupon": 0,
            "category": 0,
            "cid": 1000,
            "status": 0
          },
          "isFinished": 0,
          "isOrdered": 0,
          "tutor": {
            "introImg": "",
            // "headImgUrl": "http://kecheng.fsstudy.com/fd746c59634d45efbd25fae33cd40439.jpg",
            "headImgUrl": "/static/images/timg.jpg",
            "intro": "第20届世界脑力锦标赛荣获“世界记忆大师”称号\n《最强大脑》第二季人气选手之一",
            "tname": "卢菲菲",
            "tid": 1000,
            "tags": ""
          }
        },
        {
          "course": {
            "orderNum": 12,
            "baseSubscriber": 0,
            "title": "幸福大乐透",
            "tid": 1117,
            "price": 5,
            "is_can_use_coupon": 0,
            "category": 0,
            "cid": 1117,
            "status": 0
          },
          "isFinished": 0,
          "isOrdered": 0,
          "tutor": {
            "introImg": "",
            // "headImgUrl": "http://kecheng.fsstudy.com/f19719dc0ea043c68fce19b4eb2480d6.jpg",
            "headImgUrl": "/static/images/timg.jpg",
            "intro": "",
            "tname": "杨石头",
            "tid": 1117,
            "tags": ""
          }
        },{
          "course": {
            "orderNum": 42,
            "baseSubscriber": 0,
            "title": "开心刮刮乐",
            "tid": 1117,
            "price": 20,
            "is_can_use_coupon": 0,
            "category": 0,
            "cid": 1117,
            "status": 0
          },
          "isFinished": 0,
          "isOrdered": 0,
          "tutor": {
            "introImg": "",
            // "headImgUrl": "http://kecheng.fsstudy.com/f19719dc0ea043c68fce19b4eb2480d6.jpg",
            "headImgUrl": "/static/images/timg.jpg",
            "intro": "",
            "tname": "杨石头",
            "tid": 1117,
            "tags": ""
          }
        }
      ]
    }

    let courses = []
    courses = courses.concat(data.record)


    this.setData({ courses })




  },
  goCourseInfo(e){
    console.log('点击')
    console.log(e.currentTarget.dataset.price)
    let price = e.currentTarget.dataset.price;
    dd.navigateTo({url:`./../../package/pages/info/index?price=${price}`})
    // dd.navigateTo({url:`./../../package/pages/gwc/index`})

    
  },
  goGwc(){
    dd.navigateTo({url:`./../../package/pages/gwc/index`})
  },
  onReady() {
    // 页面加载完成
  },
  onShow() {
    // 页面显示
  },
  onHide() {
    // 页面隐藏
  },
  onUnload() {
    // 页面被关闭
  },
  onTitleClick() {
    // 标题被点击
  },
  onPullDownRefresh() {
    // 页面被下拉
  },
  onReachBottom() {
    // 页面被拉到底部
  },
  onShareAppMessage() {
    // 返回自定义分享信息
    return {
      title: 'My App',
      desc: 'My App description',
      path: 'pages/index/index',
    };
  },
});
