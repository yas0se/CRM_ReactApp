import React, { Component } from 'react';
import AjouterDetailsFacture from './AjouterDetailsFacture';
import ArticleList from './ArticleList';

class CreerFacture extends Component {
   constructor(props) {
    super(props);
    const storedArticles = JSON.parse(localStorage.getItem('articles')) || [];
    this.state = {
      client: '',
      factureId: '',
      date: '',
      articles: storedArticles,
      articleSelections: [],
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

  // handleArticleChange = (articleSelections) => {
  //   this.setState({ articleSelections });
  // };

  // handleAddFacture = () => {
  //   const { client, factureId, date, articleSelections } = this.state;
  //   const newFacture = {
  //     id: factureId,
  //     client,
  //     date,
  //     articles: articleSelections,
  //   };

  //   const storedFactures = JSON.parse(localStorage.getItem('Factures')) || [];
  //   const updatedFactures = [...storedFactures, newFacture];
  //   localStorage.setItem('Factures', JSON.stringify(updatedFactures));

  //   // Clear the form after saving
  //   this.setState({
  //     client: '',
  //     factureId: '',
  //     date: '',
  //     articles: [],
  //   });
  // };
  addArticleSelection = () => {
    this.setState((prevState) => ({
      articleSelections: [
        ...prevState.articleSelections,
        { id: Date.now(), selectedArticleId: '', quantity: 0, description: '', price: 0, discount: 0, amount: 0  }
      ],
    }));
  };
  handleArticleChange = (id, selectedArticleId) => {
    const selectedArticle = this.state.articles.find(article => article.id === selectedArticleId);
    this.setState((prevState) => ({
      articleSelections: prevState.articleSelections.map(selection =>
        selection.id === id ? {
          ...selection,
          selectedArticleId,
          description: selectedArticle.description,
          price: selectedArticle.price,
          discount: selectedArticle.discount,
          amount: selection.quantity * (selectedArticle.price - (selectedArticle.price * selectedArticle.discount / 100))
        } : selection
      ),
    }));
  };

  handleQuantityChange = (id, quantity) => {
    this.setState((prevState) => ({
      articleSelections: prevState.articleSelections.map(selection =>
        selection.id === id ? { ...selection, quantity, amount: quantity * (selection.price - (selection.price * selection.discount / 100))  } : selection
      ),
    }));
  };

  
  // updateParent = () => {
  //   this.setState({ articleSelections });
  // };

  render() {
    const { client, factureId, date, articles, articleSelections } = this.state;

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
          articleSelections={articleSelections}
          onArticleChange={this.handleArticleChange}
          addArticleSelection={this.addArticleSelection}
          handleQuantityChange={this.handleQuantityChange}
          articles={articles}

          
        />
        <div className="d-flex flex-row-reverse bd-highlight">
          <button className="p-2 bd-highlight btn btn-primary" onClick={() =>this.props.handleAddFacture(client, factureId, date, articleSelections)}>
            Ajouter
          </button>
        </div>
      </div>
    );
  }
}

export default CreerFacture;
