/*
 * @Date: 2023-03-25 15:06:14
 */
import React, { Component, Fragment } from 'react'

class ErrorBoundary extends React.Component {
  state = { hasError: false }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  render() {
    console.log(this.props);
    if (this.state.hasError) return this.props.fallback
    return this.props.children
  }
}

export default class Demo3 extends Component {

  render() {
    return (
      <div>
        <h1>greatParent...</h1>
          <ErrorBoundary fallback={<p>Something went wrong</p>}>
            <Parent/>
          </ErrorBoundary>
      </div>
    )
  }
}

class Parent extends Component {
  // state = {list: ['xiaoming', 'xiaohong', 'xiaolan', 'xiaogou']}
  state = {list: 'xiaoge'}
  render() {
    return (
      <Fragment>
        <h3>parent...</h3>
        <ul>
          {
            this.state.list.map((item, index) => {
              return <li key={index}>{item}</li>
            })
          }
        </ul>
      </Fragment>
    )
  }
}
