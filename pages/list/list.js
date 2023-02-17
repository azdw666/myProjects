// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg:"vue",
    imgurl:"/Images/bing.jpg",
    num:Math.random()*10,
    type:1,
    arr:["gui","ni","zi"]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.requestSend()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    console.log(123);
    wx.stopPullDownRefresh();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    console.log('出發了')
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  onClick(e){
    this.setData({
      msg:"五十"
    })
    console.log(e.target.dataset.xx)
  },
  inputHanlder(e){
    this.setData({
      msg:e.detail.value
    })
    console.log(e.detail.value)
  },
  requestSend(){
    wx.request({
      url: 'https://www.escook.cn/api/get',
      method:"GET",
      data:{
        name:'zs',
        age:20
      },
      success:(res)=>{
        console.log(res.data)
      }
    })
  },
  switchBar(){
    wx.switchTab({
      url: '/pages/living/living',
    });
    
  }
})