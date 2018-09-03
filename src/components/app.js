import React, { Component } from 'react';

import SingleContainer from '../containers/single-container';
import DetailContainer from '../containers/example-detail';

export default class App extends Component {
  render() {
    return (
      <div>
        <SingleContainer />
        <DetailContainer />
      </div>
    );
  }
}