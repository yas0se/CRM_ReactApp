import React, { Component } from 'react';
import CreerFacture from './CreerFacture';
import FactureList from './FactureList';
// import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      factures: [],
    };
  }
  handleAddFacture = (client, factureId, date, articleSelections) => {
    const newFacture = {
      id: factureId,
      client,
      date,
      articles: articleSelections,
    };

    const storedFactures = JSON.parse(localStorage.getItem('Factures')) || [];
    // const updatedFactures = [...storedFactures, newFacture];
    this.setState({ factures: [...storedFactures, newFacture] }, localStorage.setItem('Factures', JSON.stringify([...storedFactures, newFacture]))
  );

    // Clear the form after saving
    this.setState({
      client: '',
      factureId: '',
      date: '',
      articles: [],
    });
  };
  componentDidMount() {
    const storedFactures = JSON.parse(localStorage.getItem('Factures')) || [];
    this.setState({ factures: storedFactures });
  }
  render() {
    console.log(this.state.factures);
    return (
      <div className="container">
        <CreerFacture
          handleAddFacture={this.handleAddFacture}
           />
        <FactureList
         factures={this.state.factures}/>
      </div>
    );
  }
}

export default App;
