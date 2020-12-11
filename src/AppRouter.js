import React from "react"
import { Link, Route, BrowserRouter as Router } from "react-router-dom"
import Index from "./Pages/Index"
import Video from "./Pages/Video"
import WorkPlace from "./Pages/WorkPlace"

import "./index.css"
function AppRouter () {


  return (
    <Router>
      <div className="mianDiv">
        <div className="leftDiv">
          <h1>一级导航</h1>
          <ul>
            <li>
              <Link to="/">博客首页</Link>
            </li>
            <li>
              <Link to="/video/">教程视频</Link>
            </li>
            <li>
              <Link to="/workPlace/">职场技能</Link>
            </li>
          </ul>
        </div>
        <div className="rightDiv">
          <Route path="/" exact component={Index}></Route>
          <Route path="/video/" component={Video}></Route>
          <Route path="/workPlace/" component={WorkPlace}></Route>

        </div>

      </div>
      {/* <ul>
        <li><Link to="/">首页</Link></li>
        <li><Link to="/list/">列表</Link></li>
      </ul>
      <Route path="/" exact component={Index} ></Route>
      <Route path="/list/" component={List}></Route> */}
    </Router >

  )
}

export default AppRouter