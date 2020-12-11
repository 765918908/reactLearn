import React from 'react';
import { Link, Route } from 'react-router-dom';
import Money from "./WorkPlace/Money"
import Getup from "./WorkPlace/Getup"
function WorkPlace () {

  return (
    <div>
      <div className="topNav">
        <ul>
          <li><Link to="/workPlace/Money/">程序员加薪攻略</Link></li>
          <li><Link to="/workPlace/Getup/">程序员早起攻略</Link></li>
        </ul>
      </div>
      <div className="videoContent">
        <h2>职场技能</h2>
        <Route path="/workPlace/Money/" component={Money}></Route>
        <Route path="/workPlace/Getup/" component={Getup}></Route>
      </div>

    </div>

  );
}

export default WorkPlace;