import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { AppBar } from './components/AppBar';
import { Footer } from './components/Footer';
import { Spinner } from './components/Spinner';
import { renderApp } from './utils';

import './index.scss';

const Home = React.lazy(() => import('./home/home'));
const Commands = React.lazy(() => import('./commands/commands'));
const About = React.lazy(() => import('./about/about'));

const Loading = () => (
  <div className="flex items-center justify-center h-full">
    <Spinner />
  </div>
);

const App = props => {
  const location = useLocation();

  return (
    <>
      <AppBar />
      <TransitionGroup className="relative">
        <CSSTransition key={location.key} classNames="fade" timeout={75}>
          <div className="absolute inset-0 w-full">
            <main className="flex flex-col m-4 mt-20 text-gray-700 font-body">
              <Switch location={location}>
                <Route exact path="/">
                  <Suspense fallback={<Loading />}>
                    <Home className="flex-1" id="home" />
                  </Suspense>
                </Route>
                <Route path="/commands">
                  <Suspense fallback={<Loading />}>
                    <Commands className="flex-1" id="commands" />
                  </Suspense>
                </Route>
                <Route path="/about">
                  <Suspense fallback={<Loading />}>
                    <About className="flex-1" id="about" />
                  </Suspense>
                </Route>
              </Switch>
              <Footer />
            </main>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
};

renderApp(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
