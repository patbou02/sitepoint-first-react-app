import React from 'react';
import './App.css';
import Card from './components/Card';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Card name="Jason Bourne" job="Spy" avatarId={51} />
          </div>
          <div className="col-md-4">
            <Card name="Jessica Jones" job="Private Investigator" avatarId={28} />
          </div>
          <div className="col-md-4">
            <Card name="Tom Hanks" job="Captain" avatarId={61} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;