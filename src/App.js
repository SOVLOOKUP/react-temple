import React from 'react'
import './App.css'
import 'antd/dist/antd.css';

// reduxstore
import {Provider} from 'react-redux';
import store from './redux/ReactReduxStore';

// router
import CompileRouter from "qf-router-config"
import router from "./router"

function App(props) {
  // // 监控路由变化
  // props.history.listen((link)=>{
  //   console.log(link)
  // })

  return (
    <Provider store={store}>
      <CompileRouter {...router} />
    </Provider>
  );
}

export default App;
