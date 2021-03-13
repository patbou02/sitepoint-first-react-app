import React from 'react';
import './App.css';
import Card from './components/Card';

class App extends React.Component {

  state = {
    avatarId: 51,
    personName: 'Jason Bourne'
  }

  changeAvatar = () => {
    this.setState({
      avatarId: 65,
      personName: 'Oliver Atom'
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Card name={this.state.personName} job="Spy" avatarId={this.state.avatarId} />
          </div>
          <div className="col-md-4">
            <Card name="Jessica Jones" job="Private Investigator" avatarId={28} />
          </div>
          <div className="col-md-4">
            <Card name="Tom Hanks" job="Captain" avatarId={61} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <a className="change-avatar" href="#" onClick={this.changeAvatar}>Change Details</a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;