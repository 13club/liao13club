Page({
  data: {
 
  },

  getItem(ev){
    console.log(ev)
    let index = ev.target.dataset.index;
    this.jumpPage(index);
  },

  jumpPage(){
    my.navigateTo({
      url: '/page/history/content/index',
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
