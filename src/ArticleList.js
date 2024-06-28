import React, { Component } from 'react';
import Article from './Article';

class ArticleList extends Component {
  constructor(props) {
    super(props);
    const storedArticles = JSON.parse(localStorage.getItem('articles')) || [];
    this.state = {
      articles: storedArticles,
      // articleSelections: [],
      // quantities: {},                                                                ////////////////////////////////////////
    };
  }

  // addArticleSelection = () => {
  //   this.setState((prevState) => ({
  //     articleSelections: [
  //       ...prevState.articleSelections,
  //       { id: Date.now(), selectedArticleId: '', quantity: 0, description: '', price: 0, discount: 0, amount: 0  }
  //     ],
  //   }), this.updateParent);
  // };

  // handleQuantityChange = (id, quantity) => {
  //   this.setState((prevState) => ({
  //     articleSelections: prevState.articleSelections.map(selection =>
  //       selection.id === id ? { ...selection, quantity, amount: quantity * (selection.price - (selection.price * selection.discount / 100))  } : selection
  //     ),
  //   }), this.updateParent);
  // };

  // handleArticleChange = (id, selectedArticleId) => {
  //   this.setState((prevState) => ({
  //     articleSelections: prevState.articleSelections.map(selection =>
  //       selection.id === id ? { ...selection, selectedArticleId } : selection                    /////////////////////////////
  //     ),
  //   }), this.updateParent);
  // };
  // handleArticleChange = (id, selectedArticleId) => {
  //   const selectedArticle = this.state.articles.find(article => article.id === selectedArticleId);
  //   this.setState((prevState) => ({
  //     articleSelections: prevState.articleSelections.map(selection =>
  //       selection.id === id ? {
  //         ...selection,
  //         selectedArticleId,
  //         description: selectedArticle.description,
  //         price: selectedArticle.price,
  //         discount: selectedArticle.discount,
  //         amount: selection.quantity * (selectedArticle.price - (selectedArticle.price * selectedArticle.discount / 100))
  //       } : selection
  //     ),
  //   }), this.updateParent);
  // };


  // updateParent = () => {
  //   this.props.onArticleChange(this.props.articleSelections);
  // };

  render() {
    const { articles } = this.state;
    const { articleSelections } = this.props;
    console.log("articleSelections;", articleSelections);

    return (
      <div>
        <button className="btn btn-primary" onClick={this.props.addArticleSelection}>
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
            </tr>
          </thead>
          <tbody>
            {articleSelections.map(selection => (
              <Article
                key={selection.id}
                article={selection}
                articles={this.props.articles}
                quantity={selection.quantity}
                onQuantityChange={this.props.handleQuantityChange}
                onArticleChange={this.props.onArticleChange}
              />
            ))}
          </tbody>
        </table>
        
      </div>
    );
  }
}

export default ArticleList;
