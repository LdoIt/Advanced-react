/*
 * @Date: 2023-03-25 11:54:22
 */
import React, { Component } from 'react'
// 创建一个context用于组件树共享数据，里面的参数可以指定默认值
const shareContext = React.createContext()
export default class GreatParent extends Component {
  state = {greatParent: '祖组件数据'}
  render() {
    return (
      <shareContext.Provider value={this.state}>
        <h1>greatParent...</h1>
        <Parent/>
      </shareContext.Provider>
    )
  }
}

class Parent extends Component {
  render() {
    return (
      <div>
        <h3>parent...</h3>
        <Son/>
      </div>
    )
  }
}

class Son extends Component {
  // 指定该组件可以通过context接收某个值
  static contextType = shareContext
  render() {
    // console.log(this);
    return (
      <h5>son...接收到祖组件的值：{this.context.greatParent}</h5>
    )
  }
}

