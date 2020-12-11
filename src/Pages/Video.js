import React from 'react';
import { Link, Route } from 'react-router-dom';
import Reactpage from "./Video/Reactpage"
import Vuepage from "./Video/Vuepage"
import Flutterpage from "./Video/Flutterpage"

function Video () {

  return (
    <div>
      <div className="topNav">
        <ul>
          <li><Link to="/video/Reactpage/">reactPage</Link></li>
          <li><Link to="/video/Vuepage/">Vuepage</Link></li>
          <li><Link to="/video/Flutterpage/">Flutterpage</Link></li>
        </ul>
      </div>
      <div className="videoContent">
        <h2>视频教程</h2>
        <Route path="/video/Reactpage/" component={Reactpage}></Route>
        <Route path="/video/Vuepage/" component={Vuepage}></Route>
        <Route path="/video/Flutterpage/" component={Flutterpage}></Route>
      </div>

    </div>

  );
}

export default Video;