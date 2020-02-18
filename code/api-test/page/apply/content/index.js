Page({
  data: {
    longitude: '120.126293',
    latitude: '30.274653',
    name: '黄龙万科中心',
    address: '学院路77号',


    userName: '小米',
    userTel: '1234****',
    applyAddress: '',
    deviceSn: '',
    desc: '',
    applyVideo:''

  },
  onSubmit(e) {
    my.alert({
      content: `数据：${JSON.stringify(e.detail.value)}`,
    });



  },
  onReset() {
    
  },




  // 扫码--获取产品序号
  saomaDeviseSN(){
    my.scan({
      type: 'qr',
      success: (res) => {
        my.alert({ title: res.code });

        this.setData({
          deviceSn:res.code
        })

      },
    });
  },


  getLocal(){
    // my.openLocation({
    //   longitude: this.data.longitude,
    //   latitude: this.data.latitude,
    //   name: this.data.name,
    //   address: this.data.address,
    // })

    var that = this
    my.chooseLocation({
         success:(res)=>{
          console.log(JSON.stringify(res))
          that.setData({
            longitude:res.longitude,
            latitude:res.latitude,
            name:res.name,
            address:res.address,

            applyAddress:res.address
          })
        },
        fail:(error)=>{
          my.alert({content: '调用失败：'+JSON.stringify(error), });
        },
    });

  },



  getAgreement(){
    this.jumpPage();
  },
  jumpPage(){
    my.navigateTo({
      url: '/page/apply/agreement/index',
    });
  },


});