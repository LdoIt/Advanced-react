/*
 * @Date: 2023-03-25 11:48:21
 */
import React, { Component } from 'react'

// 注意Fragment标签可以指定key属性，而<></>不能
export default class Demo3 extends Component {
  render() {
    return (
      // <React.Fragment key={1}>
      //   <h3>Fragment...事例</h3>
      // </React.Fragment>
      <>
        <h3>Fragment...事例</h3>
      </>
    )
  }
}
