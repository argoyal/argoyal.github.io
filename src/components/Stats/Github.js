import React from 'react';

const GithubStats = () => (
  <div className="github-stats-container">
    <div className="stats-row">
      <img
        src="https://github-readme-stats.vercel.app/api?username=argoyal&count_private=true&show_icons=true&include_all_commits=true&theme=radical"
        alt="GitHub Stats"
        className="github-stat-card"
      />
      <img
        src="https://github-readme-streak-stats.herokuapp.com/?user=argoyal&theme=radical"
        alt="GitHub Streak Stats"
        className="github-stat-card"
      />
    </div>
    <div className="stats-row">
      <img
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=argoyal&layout=compact&theme=radical"
        alt="Most Used Languages"
        className="github-stat-card language-card"
      />
    </div>
  </div>
);

export default GithubStats;
