import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';
import data from '../data/projects';

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin: 2rem 0;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Projects = () => (
  <Main
    title="Projects"
    description="Learn about Arpit's projects."
  >
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/projects">Projects</Link></h2>
          <p>A selection of projects that I&apos;m not too ashamed of</p>
        </div>
      </header>
      <ProjectsGrid>
        {data.map((project) => (
          <Cell
            data={project}
            key={project.title}
          />
        ))}
      </ProjectsGrid>
    </article>
  </Main>
);

export default Projects;
