// components/test1/test1.js
import {createStoreBindings} from 'mobx-miniprogram-bindings'
import {store} from '../../store/store'
Component({
  behaviors:[createStoreBindings],
  storeBindings:{
    store,
    fields:{
      numA:"a",
      numB:"b",
      sum:"sum"
    },
    actions:{
      updateA:"updateA"
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {
    max:Number
  },

  /**
   * 组件的初始数据
   */
  data: {
    count:0,
    sum:0,
    a:0,
    b:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    addCount(){
      if(this.data.count>=this.properties.max) return;
      this.setData({
        count:this.data.count+1,
        max:this.properties.max+1
      })
      wx.showToast({
        title: 'count:'+this.data.count,
      })
    },
    doSum(){
      this.setData({
        a:this.data.a+1,
        b:this.data.b+1,
       
      })
    }
  },
  options:{
    styleIsolation:"isolated" //启用样式隔离
  },
  observers:{
    'a,b':function(a,b){
      this.setData({
        sum:a+b
      })
    }
  }
})
