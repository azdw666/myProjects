// custom-tab-bar/index.js
import {storeBindingsBehavior} from 'mobx-miniprogram-bindings'
import {store} from '../store/store'
Component({
  /**
   * 组件的属性列表
   */
  behaviors:[storeBindingsBehavior],
  storeBindings:{
    store,
    fields:{
      info:"info",
      active:"active"
    },
    actions:{
      updateInfo:"updateInfo",
      setActive:"setActive"
    }
  },
  properties: {

  },
  options:{
    "styleIsolation":"shared"
  },
  /**
   * 组件的初始数据
   */
  data: {
    active:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onChange(event) {
      
      this.setData({
        active:event.detail
      })
     wx.switchTab({
       url: '/pages/index/index',
     })
     this.setActive(event.detail)
     if(event.detail==0){
      wx.switchTab({
        url: '/pages/living/living',
      })
     }
    }
  }
})
