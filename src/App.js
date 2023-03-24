/*
 * @Date: 2023-03-23 21:31:07
 */
import React, { Component } from 'react'
// import Demo from './components/1_setState'
// import LazyCom from './components/2_lazyload'
import Demo3 from './components/Hooks'
export default class App extends Component {
  render() {
    return (
      <div>
        App....
        {/* 1.演示setState扩展的组件 */}
        {/* <Demo x={1000}/> */}
        
        {/* 2.演示路由懒加载的组件 */}
        {/* <LazyCom/> */}

        {/* 3.演示Hooks的组件 */}
        <Demo3/>
      </div>
    )
  }
}
