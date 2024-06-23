import React, { Component } from 'react';

class Article extends Component {
    handleChange = (e) => {
        const { article, onQuantityChange } = this.props;
        const quantity = parseInt(e.target.value, 10);
        onQuantityChange(article.id, quantity);
    };
    handleArticleChange = (e) => {
        const { onArticleChange } = this.props;
        const selectedArticleId = parseInt(e.target.value, 10);
        onArticleChange(this.props.article.id, selectedArticleId);
    };
    render() {
        // const { article, articles, quantity } = this.props;
        // const selectedArticle = articles.find(a => a.id === article.selectedArticleId) || {};

        // const priceAfterDiscount = selectedArticle.price ? selectedArticle.price - (selectedArticle.price * selectedArticle.discount / 100) : 0;
        // const totalAmount = quantity * priceAfterDiscount;
        const { article, articles, quantity } = this.props;
        const selectedArticle = articles.find(a => a.id === article.selectedArticleId) || {};


        return (
            // <tr>
            //     <td>
            //         <select className="form-control" value={article.selectedArticleId} onChange={this.handleArticleChange}>
            //             <option value="">Sélectionner un article</option>
            //             {articles.map(article => (
            //                 <option key={article.id} value={article.id}>
            //                     {article.description}
            //                 </option>
            //             ))}
            //         </select>
            //     </td>
            //     <td>
            //         <input
            //             type="number"
            //             className="form-control"
            //             value={quantity}
            //             onChange={this.handleChange}
            //         />
            //     </td>
            //     <td>{selectedArticle.price || 'N/A'}</td>
            //     <td>{selectedArticle.discount ? `${selectedArticle.discount}%` : 'N/A'}</td>
            //     <td>{totalAmount.toFixed(2)}</td>
            // </tr>
            <tr>
                <td>
                    <select className="form-control" value={article.selectedArticleId} onChange={this.handleArticleChange}>
                        <option value="">Sélectionner un article</option>
                        {articles.map(article => (
                            <option key={article.id} value={article.id}>
                                {article.description}
                            </option>
                        ))}
                    </select>
                </td>
                <td>
                    <input
                        type="number"
                        className="form-control"
                        value={quantity}
                        onChange={this.handleChange}
                    />
                </td>
                <td>{selectedArticle.price || 'N/A'}</td>
                <td>{selectedArticle.discount ? `${selectedArticle.discount}%` : 'N/A'}</td>
                <td>{(quantity * (selectedArticle.price - (selectedArticle.price * selectedArticle.discount / 100))).toFixed(2)}</td>
            </tr>
        );
    }
}

export default Article;
