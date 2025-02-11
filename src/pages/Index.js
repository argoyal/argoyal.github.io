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
            Read about my thoughts on technology, business, and life <a href="/my-blog">here</a>
          </p>
          <p>
            <b>Check out the Spotmentor acquisition news <a href="https://economictimes.indiatimes.com/tech/startups/ey-india-acquires-ai-startup/articleshow/79218623.cms" target="_blank" rel="noreferrer"> here </a></b>
          </p>
          <p>
            I am a seasoned technology leader with a proven track record of successfully leading
            teams of 60+ professionals and delivering high-quality, impactful projects.
            As an ex-entrepreneur, I thrive in product-driven environments and have navigated
            the full lifecycle of building, scaling, and exiting a startup.

            With deep expertise in DevOps, cloud environments, and the Python stack, I take a
            holistic approach to technology. My strong grasp of systems architecture enables me
            to design and implement scalable, efficient solutions that align with business
            objectives.

            &apos;Analyzing real-world problems, curating solutions, and implementing them through
            the digital platform is my passion&apos;—this philosophy drives me in every endeavor.
            Whether it&apos;s architecting robust infrastructure, optimizing cloud operations,
            or mentoring teams to deliver excellence, I am committed to leveraging technology
            for meaningful impact.
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
