import React from 'react';
import { Link } from 'react-router-dom';

import Hamburger from './Hamburger';
import routes from '../../data/routes';

// Websites Navbar, displays routes defined in 'src/data/routes'
const Navigation = () => (
  <header id="header">
    <h1 className="index-link">
      {routes.filter((l) => l.index).map((l) => (
        <Link key={l.label} to={l.path}>{l.label}</Link>
      ))}
    </h1>
    <nav className="links">
      <ul>
        {routes.filter((l) => !l.index).map((l) => (
          <li key={l.label}>
            <Link to={l.path}>{l.label}</Link>
          </li>
        ))}
        <li key="Blogs">
          <a href="https://arpitgoyalkgp.medium.com" target="_blank" rel="noreferrer">My Blog</a>
        </li>
        <li key="Blogs">
          <a href="https://ppp.arpitgoyal.co.in" target="_blank" rel="noreferrer">Points Pro Plus</a>
        </li>
      </ul>
    </nav>
    <Hamburger />
  </header>
);

export default Navigation;
