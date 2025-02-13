import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Main from '../layouts/Main';

const TimelineContainer = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 0 20px;
`;

const TimelineItem = styled.div`
  position: relative;
  padding-left: 40px;
  padding-bottom: 40px;
  
  &:last-child {
    padding-bottom: 0;
  }

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 2px;
    height: 100%;
    background-color: #2ebaae;
  }

  &::after {
    content: '';
    position: absolute;
    left: -4px;
    top: 0;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #2ebaae;
    border: 2px solid #fff;
  }
`;

const TimelineDate = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  color: #2ebaae;
  margin-bottom: 0.5rem;
`;

const TimelineTitle = styled.h3`
  font-size: 1.2rem;
  margin: 0 0 0.5rem 0;
  color: #3c3b3b;
`;

const TimelineContent = styled.div`
  background: #fff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
  p {
    margin: 0;
    color: #666;
    line-height: 1.6;
  }
`;

const Index = () => (
  <Main
    title="Arpit Goyal"
    description="Welcome to my personal website"
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">About Me</Link></h2>
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

      <TimelineContainer>
        <TimelineItem>
          <TimelineDate>February, 2025</TimelineDate>
          <TimelineTitle>New blog launched</TimelineTitle>
          <TimelineContent>
            <p>
              Wrote a new blog highlighting my observations on Generative AI
              enabled software development. Read about the blog <a href="https://arpitgoyalkgp.medium.com/a-quick-look-at-gen-ai-enabled-development-b46c6e68fe4b">here</a>
            </p>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineDate>June, 2021</TimelineDate>
          <TimelineTitle>Joined Calance</TimelineTitle>
          <TimelineContent>
            <p>
              I joined Calance as a Manager to establish their digital and emerging technologies
              practice.
            </p>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineDate>November, 2020</TimelineDate>
          <TimelineTitle>Spotmentor Acquisition</TimelineTitle>
          <TimelineContent>
            <p>
              Check out the Spotmentor acquisition news <a href="https://economictimes.indiatimes.com/tech/startups/ey-india-acquires-ai-startup/articleshow/79218623.cms">here</a>
            </p>
          </TimelineContent>
        </TimelineItem>
      </TimelineContainer>
    </article>
  </Main>
);

export default Index;
