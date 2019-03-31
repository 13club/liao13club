// pages/test/test.js// pages/Shop_car/Shop_car.js
    Page({

      /**
       * 页面的初始数据
       */
      data: {
        data: [
          {
            name: "蓝调小生1",
            index: 0,
            state: 0,
            checkeedAll: false,
            data: [
              {
                url: "http://bd.eacase.com/budongimg/zuixin1.png",
                classtitle: "钢琴1",
                index: 0,
                state: 0,
                checked: false,
                price:9.9
              }, {
                url: "http://bd.eacase.com/budongimg/zuixin1.png",
                classtitle: "吉他1",
                index: 1,
                state: 0,
                checked: false,
                price: 9.9
              },
              {
                url: "http://bd.eacase.com/budongimg/zuixin1.png",
                classtitle: "吉他1",
                index: 2,
                state: 0,
                checked: false,
                price: 4.9
              }
            ]
          },
          {
            name: "蓝调小生2",
            index: 0,
            state: 0,
            checkeedAll: false,
            data: [
              {
                url: "http://bd.eacase.com/budongimg/zuixin1.png",
                classtitle: "钢琴2",
                index: 0,
                state: 0,
                checked: false,
                price: 9.9
              }, {
                url: "http://bd.eacase.com/budongimg/zuixin1.png",
                classtitle: "吉他2",
                index: 1,
                state: 0,
                checked: false,
                price: 4.9
              }
            ]
          },
        ],
        checkedAll: false,
        count:0,
        priceAll:0.0

      },

      checkall: function (e) {
        var index = e.target.dataset.index;//点击元素的下标
        var list = this.data.data[index].data; //获取到了 当前老师元素的 下的所有课程
        var status = this.data.data[index].checkeedAll; //获取老师下的checkeedAll为什么
        for (var i = 0; i < list.length; i++) {
          list[i].checked = !status; //将当前老师元素下的所有课程 的checked都为 false  或者是  true
        };
        var dataIndex = 'data[' + index + '].data';//这个可以拿到 data 中 index的老师下的所有课程  数据
        var dataStatus = 'data[' + index + '].checkeedAll';//当前老师元素下checkeedAll的属性 
        this.setData({
          [dataIndex]: list,
          [dataStatus]: !status,
        });
        //只有所有单选的 都选中了  当前单选的这块的的父级就会 选中 ，将选中的 父级 添加在一个数组当中 如果过 它本身的数据的length == 它被选中的length 就让  三级的全选 选中
        var data = this.data.data;
        var datarr = [];
        for (var a = 0; a < data.length; a++) {
          if (data[a].checkeedAll == true) {
            datarr.push(data[a]);
          }
        }
        if (data.length === datarr.length) {
          this.setData({
            checkedAll: true
          });
        } else {
          this.setData({
            checkedAll: false
          });
        }
        //单选 选中的时候 的结算 为多少
        var count = [];
        var priceAll=0;
        for (var b = 0; b < data.length; b++) {
          var datacount = data[b].data;
          for (var c = 0; c < datacount.length; c++) {
            if (datacount[c].checked == true) {
              count.push(datacount[c]);
              priceAll += datacount[c].price;
            }
          }
        }
        var price = Number(priceAll).toFixed(2);
        this.setData({
          count: (count.length),
          priceAll: price
        });
      },

      //点击课程上的 checkbox

      Checks1: function (e) {
        var groupIndex = e.target.dataset.groupindex; // 拿到老师的index
        var index = e.target.dataset.index; // 拿到当前课程 的index
        var list = this.data.data[groupIndex].data;//获取到了 当前老师元素的 下的所有课
        var list2 = this.data.data[groupIndex].data[index].checked;//获取到了 当前老师元素的 下的所有课程的某一个index 的checked 值
        var dataIndexchecked = 'data[' + groupIndex + '].data[' + index + '].checked';//这个可以拿到 data 中 index的老师下的所有课程  数据
        var dataStatus = 'data[' + groupIndex + '].checkeedAll';//当前老师元素下checkeedAll的属性 
        this.setData({
          [dataIndexchecked]: !list2,
        });
        var listcheckedarr=[] //单选 选中的 的课程
        for(var i=0;i<list.length;i++){
          if(list[i].checked==true){
              listcheckedarr.push(list[i]);
          }
        }
        if (list.length === listcheckedarr.length){
          this.setData({
            [dataStatus]:true
          });
        }else{
          this.setData({
            [dataStatus]: false
          });
        }
        //只有所有单选的 都选中了  当前单选的这块的的父级就会 选中 ，将选中的 父级 添加在一个数组当中 如果过 它本身的数据的length == 它被选中的length 就让  三级的全选 选中
        var data= this.data.data;
        var datarr=[];
        for(var a=0;a<data.length;a++){
            if(data[a].checkeedAll==true){
              datarr.push(data[a]);
            }
        }
        if (data.length === datarr.length){
            this.setData({
              checkedAll:true
            });
        }else{
            this.setData({
              checkedAll: false
            });
        }

        //单选 选中的时候 的结算 为多少  价格为多少
        var count=[];
        var priceAll=0;
        for(var b=0;b<data.length;b++){
          var datacount=data[b].data;
          for(var c=0;c<datacount.length;c++){
              if(datacount[c].checked==true){
                count.push(datacount[c]);
                priceAll += datacount[c].price;
              }
          }
        }
        var price=Number(priceAll).toFixed(2);
        this.setData({
          count:(count.length),
          priceAll:price
        });
      },
      //点击全选
      AllTap: function (e) {
        var checkedAll = this.data.checkedAll;
        var list1 = this.data.data;
        for (var i = 0; i < list1.length; i++) {
          list1[i].checkeedAll = !checkedAll;
          var list2 = this.data.data[i].data;
          for (var a = 0; a < list2.length; a++) {
            list2[a].checked = !checkedAll;
          }
        }
        //单选 选中的时候 的结算 为多少
        var count = [];
        var priceAll = 0;
        for (var b = 0; b < list1.length; b++) {
          var datacount = list1[b].data;
          for (var c = 0; c < datacount.length; c++) {
            if (datacount[c].checked == true) {
              count.push(datacount[c]);
              priceAll += datacount[c].price;
            }
          }
        }
        var price = Number(priceAll).toFixed(2);
        this.setData({
          checkedAll: (!checkedAll),
          data: list1,
          count: (count.length),
          priceAll: price
        });
      },

      //点击 单个删除 课程
      shanchuTap:function(e){
        var that=this;
        var groupIndex = e.target.dataset.groupindex; // 拿到老师的index
        var index = e.target.dataset.index; // 拿到当前课程 的index
        dd.showToast({
          title: '',
          content: '确定要删除吗？',
          cancelColor:"#ababab",
          confirmColor:"#027ee7",
          success(res) {
            if (res.confirm) {
              var list2 = that.data.data[groupIndex].data;
              list2.splice(index, 1);
              var dataStatus = 'data[' + groupIndex + '].data';
              that.setData({
                [dataStatus]:list2
              });
              dd.showToast({
                title: '删除成功',
                icon:"none",
              })
            } else if (res.cancel) {
              console.log('用户点击取消')
            }
          }
        });
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