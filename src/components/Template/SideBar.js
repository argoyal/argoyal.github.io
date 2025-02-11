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
      <p>Hi, I&apos;m Arpit. I like building things and solving problems. Currently I am heading the digital and emerging technologies
        practice at Calance Software Pvt Ltd. creating digital solutions for clients.
        I am an <a href="https://iitkgp.ac.in/" target="_blank" rel="noreferrer">IIT Kharagpur</a> graduate, and
        the co-founder and CTO of <a href="https://www.ey.com/en_in/consulting/spotmentor-digital-learning-solutions" target="_blank" rel="noreferrer">Spotmentor </a>
        that got acquired by Ernst & Young LLP. Before Spotmentor,
        I was a developer with HT Media (Shine.com)
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
