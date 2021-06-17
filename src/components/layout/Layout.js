import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "../home/Home";
import OmMeg from '../omMeg/OmMeg';


function Layout() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <Router>
      <nav className="navigation">
        <div className="nav-container">
          <NavLink to="/" className="nav-logo">
          </NavLink>
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
                to="/prosjekt"
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
      </Switch>
    </Router>
  );
}

export default Layout;