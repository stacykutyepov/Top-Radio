import React from "react";
import { routes } from "../../../constants/routes";
import { Link } from "react-router-dom";
import "./styles.scss";

const NavBar = () => {
  return (
    <nav className="nav">
      <ul>
        {routes.map((route) => (
          <li key={route.name}>
            <Link to={route.route}>{route.name.toUpperCase()}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
