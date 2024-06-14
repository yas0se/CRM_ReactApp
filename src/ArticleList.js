import React, { Component } from 'react';
import Article from './Article';

class ArticleList extends Component {
  constructor(props) {
    super(props);
    const storedArticles = JSON.parse(localStorage.getItem('articles')) || [];
    this.state = {
      articles: storedArticles,
      articleSelections: [],
      quantities: {},
    };
  }

  addArticleSelection = () => {
    this.setState((prevState) => ({
      articleSelections: [
        ...prevState.articleSelections, 
        { id: Date.now(), selectedArticleId: '', quantity: 0 }
      ],
    }));
  };

  handleQuantityChange = (id, quantity) => {
    this.setState((prevState) => ({
      articleSelections: prevState.articleSelections.map(selection => 
        selection.id === id ? { ...selection, quantity } : selection
      ),
    }));
  };

  handleArticleChange = (id, selectedArticleId) => {
    this.setState((prevState) => ({
      articleSelections: prevState.articleSelections.map(selection => 
        selection.id === id ? { ...selection, selectedArticleId } : selection
      ),
    }));
  };

  render() {
    const { articles, articleSelections } = this.state;

    return (
      <div>
        <button className="btn btn-primary" onClick={this.addArticleSelection}>
          + Ajouter un Article
        </button>
        <table className="table table-bordered mt-3">
          <thead>
            <tr>
              <th>Description</th>
              <th>Quantité</th>
              <th>Prix</th>
              <th>Remise</th>
              <th>Montant</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {articleSelections.map(selection => (
              <Article 
                key={selection.id} 
                article={selection}
                articles={articles}
                quantity={selection.quantity}
                onQuantityChange={this.handleQuantityChange}
                onArticleChange={this.handleArticleChange}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ArticleList;
