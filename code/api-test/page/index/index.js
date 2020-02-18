Page({
  data: {

    itemsThumbMultiple: [
      {
        thumb: 'https://tfsimg.alipay.com/images/partner/T12rhxXkxcXXXXXXXX',
        title: 'Kender',
        brief: '售货员',
      }
    ],

    itemsThumbMultiple2: [
      {
        thumb: 'https://tfsimg.alipay.com/images/partner/T12rhxXkxcXXXXXXXX',
        title: '报修申请',
      },
      {
        thumb: 'https://tfsimg.alipay.com/images/partner/T12rhxXkxcXXXXXXXX',
        title: '报修历史',
      },
      {
        thumb: 'https://tfsimg.alipay.com/images/partner/T12rhxXkxcXXXXXXXX',
        title: '知识库',
      }
    ],

  },

  onItemClick(ev) {
    my.alert({
      content: `点击了第${ev.index}行`,
    });
  },
  onItemClick2(ev) {
    // my.alert({
    //   content: `点击了第${ev.index}行`,
    // });

    let indexs = ev.index;
    switch(indexs){
      case 0:
        this.applyIndexPage();
        break;
      case 1:
        this.historyIndexPage();
        break;
    }


  },

  applyIndexPage(){
    my.navigateTo({
      url: '/page/apply/index/index',
    });
  },

  historyIndexPage(){
    my.navigateTo({
      url: '/page/history/index/index',
    });
  },

  jumpPage(){
    my.navigateTo({
      url: '/page/common/search/search',
    });
  },


  
  onSearchBarTap() {
    my.navigateTo({
      url: '/page/common/search/search',
    });
  },
  onTabBarTap(e) {
    const { index } = e.target.dataset
    this.setData({
      activeTab: index,
    });
  },
  onLoad() {
    my.getSystemInfo({
      success: (res) => {
        if (res.statusBarHeight && res.titleBarHeight) {
          this.setData({
            top: res.statusBarHeight + res.titleBarHeight,
          });
        }
      },
    });
  },
});
