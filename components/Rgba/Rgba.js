// components/Rgba/Rgba.js
const my_bev = require('../../Behavior/my-behavior');
import {storeBindingsBehavior} from 'mobx-miniprogram-bindings'
import {store} from '../../store/store'
Component({
  behaviors:[storeBindingsBehavior],
  storeBindings:{
    store,
    fields:{
      a:"a",
      b:"b",
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
    count:Number
  },

  /**
   * 组件的初始数据
   */
  data: {
    rgb:{
      R:0,
      G:0,
      B:0
    },
    fullcolor:'0,0,0'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeColorR(){
      this.setData({
        'rgb.R':this.data.rgb.R+5 >255? 0:this.data.rgb.R+5
      })
    },
    changeColorG(){
      this.setData({
        'rgb.G':this.data.rgb.G+5 >255? 0:this.data.rgb.G+5
      })
    },
    changeColorB(){
      this.setData({
        'rgb.B':this.data.rgb.B+5 >255? 0:this.data.rgb.B+5
      });
      
      this.triggerEvent("sync",{value:this.properties.count})
    },
    HanderlAdd(e){
      this.updateA(e.target.dataset.step)
    }
  },
  observers:{
    'rgb.**':function(obj){
      this.setData({
        fullcolor:obj.R+","+obj.G+","+obj.B
      })
    }
  },
  options:{
    pureDataPattern:/^_[a,b,c]*$/,
    multipleSlots:true
  },
  lifetimes:{
    attached(){
      console.log(5)
    }
  },
  pageLifetimes:{
    show:function(){
      this.setData({
        'rgb.R':Math.floor(Math.random()*256) ,
        'rgb.G':Math.floor(Math.random()*256),
        'rgb.B':Math.floor(Math.random()*256)
      })
    }
  },
  
})
