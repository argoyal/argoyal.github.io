import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Arpit Goyal</h2>
        <p><a href="mailto:arpitgoyal.iitkgp@gmail.com">arpitgoyal.iitkgp@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        I am a tech leader with expertise in DevOps, cloud, and Python,
        skilled in scaling startups and leading teams. An IIT Kharagpur graduate,
        I design scalable solutions, optimize systems, and mentor teams, driven
        by a passion for solving real-world problems through impactful technology.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Arpit Goyal <Link to="/">arpitgoyal.co.in</Link>.</p>
    </section>
  </section>
);

export default SideBar;
