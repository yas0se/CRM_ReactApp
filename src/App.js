import React, { Component } from 'react';
import CreerFacture from './CreerFacture';
import FactureList from './FactureList';
// import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <CreerFacture />
        <FactureList />
      </div>
    );
  }
}

export default App;
