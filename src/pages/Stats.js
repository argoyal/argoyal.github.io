import React from 'react';

import Main from '../layouts/Main';

import GithubStats from '../components/Stats/Github';

const Stats = () => (
  <Main
    title="Stats"
    description="Some statistics from Arpit's Github"
  >
    <article className="post" id="stats">
      <GithubStats />
    </article>
  </Main>
);

export default Stats;
