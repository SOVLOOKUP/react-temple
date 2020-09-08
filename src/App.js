import React from 'react'
import './App.css'
import {Route,Link,NavLink,Switch, Redirect, withRouter} from 'react-router-dom'
// import pages
import Home from './pages/Home'
import ReduxPage from './pages/ReduxPage';

function App(props) {

  // 监控路由变化
  props.history.listen((link)=>{
    console.log(link)
  })

  return (
    <div className="App">
        <div>
          <NavLink to="/home">Home页面</NavLink>
          
          {/* 隐式传参 */}
          <NavLink to={{
            pathname:"/redux",
            state:{value:"我是隐式参数"}
          }}>Redux页面</NavLink>

        </div>
      <Switch>
        <Redirect exact from="/" to="/home"/>

        {/* 显式传参 */}
        <Route path="/home/:id?" component={Home}/>

        <Route path="/redux" component={ReduxPage}/>
      </Switch>
    </div>
  );
}

export default withRouter(App);
