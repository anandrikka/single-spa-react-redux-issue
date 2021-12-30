// Detect older browsers
if (!((window.CSS && window.CSS.supports) || window.supportsCSS)) {
  document.body.classList.add('oldbrowser');
}

require('core-js'); // JS polyfills
import * as React from 'react';
import { Provider } from 'react-redux';

import { store } from './store';
import './main.scss';

/* eslint-disable */
export default class Root extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    }
  }

  componentDidCatch(error, info) {
    this.setState({
      hasError: true,
    })
    console.error('Error Loading Dispatch: ', error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>Unable to load dispatch</div>
      );
    }
    return (
      <Provider store={ store }>
        <div>Application 1</div>
      </Provider>
    );
  }
}

