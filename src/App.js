import React, { Suspense, lazy } from 'react';
import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom';
import Main from './layouts/Main'; // fallback for lazy pages
import './static/css/main.scss'; // All of our styles

const { PUBLIC_URL } = process.env;

// Every route - we lazy load so that each page can be chunked
// NOTE that some of these chunks are very small. We should optimize
// which pages are lazy loaded in the future.
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Index = lazy(() => import('./pages/Index'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Projects = lazy(() => import('./pages/Projects'));
const Resume = lazy(() => import('./pages/Resume'));
const Stats = lazy(() => import('./pages/Stats'));

const App = () => (
  <BrowserRouter basename={PUBLIC_URL}>
    <Suspense fallback={<Main />}>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route path="/stats" component={Stats} />
        <Route path="/resume" component={Resume} />
        <Route
          path="/my-blog"
          component={() => {
            window.open('https://arpitgoyalkgp.medium.com', '_blank');
            return <Redirect to="/about" />;
          }}
        />
        <Route
          path="/ppp-services"
          component={() => {
            window.open('https://pointsproplus.web.app', '_blank');
            return <Redirect to="/about" />;
          }}
        />
        <Route
          path="/my-dashboard"
          component={() => {
            window.open('https://dashboard.arpitgoyal.co.in', '_blank');
            return <Redirect to="/about" />;
          }}
        />
        <Route component={NotFound} status={404} />
      </Switch>
    </Suspense>
  </BrowserRouter>
);

export default App;
