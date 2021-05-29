import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import ContactIcons from '../components/Contact/ContactIcons';

const Contact = () => (
  <Main
    title="Contact"
    description="Contact Arpit Goyal via email @ arpitgoyal.iitkgp@gmail.com"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/contact">Contact</Link></h2>
        </div>
      </header>
      <div className="email-at">
        <p>Feel free to get in touch. You can email me at: </p>
        <a href="mailto:arpitgoyal.iitkgp@gmail.com">arpitgoyal.iitkgp@gmail.com</a>
      </div>
      <ContactIcons />
    </article>
  </Main>
);

export default Contact;
