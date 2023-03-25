/*
 * @Date: 2023-03-25 12:30:14
 */
import React, { Component, Fragment, PureComponent } from 'react'
// Component的两个问题
// > 1. 只要执行setState(),即使不改变状态数据, 组件也会重新render() ==> 效率低
// > 2. 只当前组件重新render(), 就会自动重新render子组件，纵使子组件没有用到父组件的任何数据 ==> 效率低
// 解决办法：使用PureComponent
export default class GreatParent extends PureComponent {
  state = {greatParent: '祖组件数据'}
  change = () => {
    this.setState({greatParent: '改变了祖组件数据'})
    // this.setState({})
  }
  render() {
    console.log('greatParent---render');
    return (
      <div>
        <h1>greatParent...</h1>数据：{this.state.greatParent}
        <button onClick={this.change}>change</button>
        <Parent/>
        {/* <Parent data="data"/> */}
      </div>
    )
  }
}

class Parent extends PureComponent {
  render() {
    console.log('Parent---render');
    return (
      <Fragment>
        <h3>parent...</h3>
        {/* <h3>parent...父组件数据：{this.props.data}</h3> */}
      </Fragment>
    )
  }
}

class Son extends Component {
  render() {
    return (
      <h5>son...</h5>
    )
  }
}
