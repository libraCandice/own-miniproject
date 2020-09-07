//index.js
//获取应用实例
const app = getApp()
// const params = {
//   data: {
//     activeTab: 'home',
//     motto: 'Hello World 小紅君',
//     userInfo: {},
//     hasUserInfo: false,
//     canIUse: wx.canIUse('button.open-type.getUserInfo'),
//     nodes: [{
//       name: 'div',
//       attrs: {
//         class: 'div_class',
//         style: 'line-height: 60px; color: red;'
//       },
//       children: [{
//         type: 'text',
//         text: "You never know what you're gonna get."
//       }]
//     }]
//   },
//   clickMe: function () {
//       wx.showToast({
//         title: '第一次开发小程序'
//       })
//   },
//   //事件处理函数
//   bindViewTap: function () {
//     wx.navigateTo({
//       url: '../logs/logs'
//     })
//   },
//   onLoad: function () {
//     if (app.globalData.userInfo) {
//       this.setData({
//         userInfo: app.globalData.userInfo,
//         hasUserInfo: true
//       })
//     } else if (this.data.canIUse) {
//       // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
//       // 所以此处加入 callback 以防止这种情况
//       app.userInfoReadyCallback = res => {
//         this.setData({
//           userInfo: res.userInfo,
//           hasUserInfo: true
//         })
//       }
//     } else {
//       // 在没有 open-type=getUserInfo 版本的兼容处理
//       wx.getUserInfo({
//         success: res => {
//           app.globalData.userInfo = res.userInfo
//           this.setData({
//             userInfo: res.userInfo,
//             hasUserInfo: true
//           })
//         }
//       })
//     }
//   },
//   getUserInfo: function (e) {
//     console.log(e)
//     app.globalData.userInfo = e.detail.userInfo
//     this.setData({
//       userInfo: e.detail.userInfo,
//       hasUserInfo: true
//     })
//   }
// }
// var template = require('../../template/template.js');
// const params = {
//   data: {

//   },
//   onLoad: function () {
//     template.tabbar("tabBar", 0, this)//0表示第一个tabbar
//   }
// }
// Page(params)

var template = require('../../template/template.js');
const params = {
  data: {

  },
  onLoad: function () {
    //template.tabbar("tabBar", 0, this)//0表示第一个tabbar
  },
}
Page(params)
