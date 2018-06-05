import ReactDOM from 'react-dom';
import React from 'react';

import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import DataHOC from './component/data-hoc';
import LayoutHOC from './component/layout-hoc';

import config from './config';

const base = document.querySelector('base')
const baseHref = base ? base.getAttribute('href') : '/'
const renderApp = () => {
  ReactDOM.render(
    <BrowserRouter basename={baseHref.replace(/\/$/, '')}>
      <Switch>
      </Switch>
    </BrowserRouter>, document.getElementById('container')
  );
};

//store.subscribe(renderApp);
renderApp();
