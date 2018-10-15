import React, { Component } from 'react';
import './App.css';

import {FocustipWrapper} from 'react-focustip';

import ComponentRed from './ComponentRed';
import ComponentMellow from './ComponentMellow';
import ComponentBlue from './ComponentBlue';
import ComponentYellow from './ComponentYellow';

class App extends Component {
  render() {
    return (
      <FocustipWrapper>
        <div className="component-holder">
          <ComponentRed />
          <ComponentBlue />
          <ComponentYellow />
          <ComponentMellow />
        </div>
      </FocustipWrapper>
    );
  }
}

export default App;
