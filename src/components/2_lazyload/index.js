/*
 * @Date: 2023-03-23 21:31:07
 */
import React, { Component, lazy, Suspense } from 'react'
import {Route} from 'react-router-dom'
// import Demo from './components/1_setState'
import MyNavLink from '../MyNavLink'
// import About from './pages/About'
const About = lazy(() => import('../../pages/About'))
// import Home from './pages/Home'
const Home = lazy(() => import('../../pages/Home'))
export default class LazyCom extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="row">
            <div className="col-xs-offset-2 col-xs-8">
              <div className="page-header">
                <h2>React Router Demo</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-2 col-xs-offset-2">
              <div className="list-group">
                {/* <a className="list-group-item active" href="./about.html">About</a>
                <a className="list-group-item" href="./home.html">Home</a> */}
                <MyNavLink to="/about">About</MyNavLink>
                <MyNavLink to="/home">Home</MyNavLink>
              </div>
            </div>
            <div className="col-xs-6">
              <div className="panel">
                <div className="panel-body">
                    <Suspense fallback={<h2>lodding</h2>}>
                      <Route path="/about" component={About} />
                      <Route path="/home" component={Home} />
                    </Suspense>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

