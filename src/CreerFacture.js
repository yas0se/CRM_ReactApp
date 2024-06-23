import React, { Component } from 'react';
import AjouterDetailsFacture from './AjouterDetailsFacture';
import ArticleList from './ArticleList';

class CreerFacture extends Component {
   constructor(props) {
    super(props);
    this.state = {
      client: '',
      factureId: '',
      date: '',
      articles: [],
    };
  }

  handleClientChange = (client) => {
    this.setState({ client });
  };

  handleFactureIdChange = (factureId) => {
    this.setState({ factureId });
  };

  handleDateChange = (date) => {
    this.setState({ date });
  };

  handleArticleChange = (articles) => {
    this.setState({ articles });
  };

  handleAddFacture = () => {
    const { client, factureId, date, articles } = this.state;
    const newFacture = {
      id: factureId,
      client,
      date,
      articles,
    };

    const storedFactures = JSON.parse(localStorage.getItem('Factures')) || [];
    const updatedFactures = [...storedFactures, newFacture];
    localStorage.setItem('Factures', JSON.stringify(updatedFactures));

    // Clear the form after saving
    this.setState({
      client: '',
      factureId: '',
      date: '',
      articles: [],
    });
  };

  render() {
    const { client, factureId, date, articles } = this.state;

    return (
      <div className="Facture-form">
        <AjouterDetailsFacture
          client={client}
          factureId={factureId}
          date={date}
          onClientChange={this.handleClientChange}
          onFactureIdChange={this.handleFactureIdChange}
          onDateChange={this.handleDateChange}
        />
        <ArticleList
          articles={articles}
          onArticleChange={this.handleArticleChange}
        />
        <div className="d-flex flex-row-reverse bd-highlight">
          <button className="p-2 bd-highlight btn btn-primary" onClick={this.handleAddFacture}>
            Ajouter
          </button>
        </div>
      </div>
    );
  }
}

export default CreerFacture;
