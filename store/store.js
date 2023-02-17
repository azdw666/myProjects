import {observable,action} from 'mobx-miniprogram'

export const store = observable({
  a:1,
  b:2,
  info:0,
  active:0,
  get sum(){
    return this.a+this.b
  },
  //修改之
  updateA:action(function(step){
    this.a +=step;
  }),
  updateB:action(function(step){
    this.b +=step;
  }),
  updateInfo:action(function(step){
      this.info += step;
  }),
  setActive:action(function(i){
      this.active = i;
  })
})
