/*
 * @Date: 2023-03-25 12:48:10
 */
import React, { Component, Fragment } from 'react'

export default class GreatParent extends Component {
  render() {
    return (
      <div>
        <h1>greatParent...</h1>
        {/* <Parent>
          <Son name="zs"></Son>
        </Parent> */}
        <Parent render={(data) => <Son data={data}/>}/>
      </div>
    )
  }
}

class Parent extends Component {
  state = {name: 'zs'}
  render() {
    // 拿到props
    // console.log(this.props.children.props);
    return (
      <Fragment>
        <h3>parent...</h3>
        {/* {this.props.children} */}
        {this.props.render(this.state)}
      </Fragment>
    )
  }
}

class Son extends Component {
  render() {
    console.log(this.props);
    return (
      <Fragment>
        <h5>son...</h5>
        {this.props.data.name}
      </Fragment>      
    )
  }
}
