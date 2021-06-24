import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "../home/Home";
import OmMeg from "../omMeg/OmMeg";
import Project from '../project/Project';
import HeelsShop from "../details/heelsShop/HeelsShop";

function Layout() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <Router>
      <nav className="navigation">
        <div className="nav-container">
          <NavLink to="/" className="nav-logo"></NavLink>
          <ul class={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                to="/"
                activeClassName="active"
                exact
                className="nav-link"
                onClick={handleClick}
              >
                <i class="fas fa-home"></i>
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                to="/om-meg"
                activeClassName="active"
                exact
                className="nav-link"
                onClick={handleClick}
              >
                <i class="fas fa-user-tie"></i>
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                to="/prosjekter"
                activeClassName="active"
                exact
                className="nav-link"
                onClick={handleClick}
              >
                <i class="fas fa-briefcase"></i>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/informasjon"
                activeClassName="active"
                exact
                className="nav-link"
                onClick={handleClick}
              >
                <i class="fas fa-info-circle"></i>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/om-meg" exact component={OmMeg} />
        <Route path="/prosjekter" exact component={Project} />
        <Route path="/heels-shop" exact component={HeelsShop} />
      </Switch>
    </Router>
  );
}

export default Layout;
