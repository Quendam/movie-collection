import React, { Component } from 'react';
import './assets/css/App.css';
import './assets/css/bootstrap.min.css';
import {Panel} from './components/panel.js';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className='container'>
            <div className='col-md-4'>
                <Panel
                    heading={'panel heading'}
                    body={'panel body'}
                  />
            </div>
            <div className='col-md-4'>
              <Panel
                  headingStyle={'danger'}
                  heading={'Heading'}
                  body={'Testing'}
                />
            </div>
            <div className='col-md-4'>
              <Panel
                  headingStyle={'success'}
                  heading={'Heading'}
                  body={'Last col'}
                />
            </div>
          </div>
      </div>
    );
  }
}

export default App;
