import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Arpit's personal website."}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <p>
            <b>Check out the latest acquisition news <a href="https://economictimes.indiatimes.com/tech/startups/ey-india-acquires-ai-startup/articleshow/79218623.cms" target="_blank" rel="noreferrer"> here </a></b>
          </p>
          <p>
            I am a Python professional with the focus on the usage of open source technologies.
            I also have an extensive understanding of systems architecture.
            Analysing real-world problems, curating solutions and implementing them through
            the digital platform is my passion.
          </p>
        </div>
      </header>
      <p> Welcome to my website. Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
    </article>
  </Main>
);

export default Index;
