import * as React from 'react';
import * as ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';

import Root from './main';

const reactLifeCycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  domElementGetter: () => document.getElementById('root')
});

export const { bootstrap } = reactLifeCycles;
export const { mount } = reactLifeCycles;
export const { unmount } = reactLifeCycles;
