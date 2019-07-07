import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <div className=" fixed mt5">
        <ul className="list">
          <li>
            <NavLink
              className="link pa3 bg-gray db silver bb b--black-50"
              to="/"
              exact
            >
              1: Introduction
            </NavLink>
          </li>
          <li>
            <NavLink className="link pa3 bg-gray db silver" to="/prettier">
              2: npm, ESLint & Prettier
            </NavLink>
          </li>
          <li>
            <NavLink
              className="link pa3 bg-gray db silver bt b--black-50 bb b--black-50"
              to="/parcel"
              exact
            >
              3: Parcel
            </NavLink>
          </li>
          <li>
            <NavLink
              className="link pa3 bg-gray db silver  bb b--black-50"
              to="/communication"
              exact
            >
              4: Component Communication
            </NavLink>
          </li>
          <li>
            <NavLink
              className="link pa3 bg-gray db silver bb b--black-50"
              to="/functional"
              exact
            >
              5: Functional CSS
            </NavLink>
          </li>
          <li>
            <NavLink
              className="link pa3 bg-gray db silver "
              to="/tachyons"
              exact
            >
              6: Tachyons
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
