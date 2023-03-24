/*
 * @Date: 2023-03-23 21:50:15
 */
import React, { Component } from 'react'

export default class Demo extends Component {
  state = {count: 1}
  add = () => {
    // this.setState({
    //   count: this.state.count+1
    // })
    // console.log(this.state.count);
    // 1.上面代码的state是先前的state，要获取当前的state.count 必须为setState传入第二个参数
    // this.setState({count: this.state.count+1}, () => {console.log(this.state.count);})

    // 2.setState() 第一个参数也可以是一个函数，接收两个参数状态和props，函数写法主要用于当前操作状态时依赖于先前的状态
    this.setState((state, props) => {console.log(state, props);})
  }
  render() {
    return (
      <div>
        <button onClick={this.add}>+1</button>
      </div>
    )
  }
}
