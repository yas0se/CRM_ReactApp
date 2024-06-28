import React, { Component } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Specify the root element for accessibility

class FactureList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      selectedFacture: null,
    };
  }

  // componentDidMount() {
  //   const storedFactures = JSON.parse(localStorage.getItem('Factures')) || [];
  //   this.setState({ factures: storedFactures });
  // }

  openModal = (facture) => {
    this.setState({ modalIsOpen: true, selectedFacture: facture });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false, selectedFacture: null });
  };

  calculateAmounts = (articles) => {
    let totalHT = 0;
    articles.forEach(article => {
      totalHT += article.amount;
    });
    const tva = totalHT * 0.2; // Assuming 20% TVA
    const ttc = totalHT + tva;
    return { totalHT, tva, ttc };
  };

  render() {
    const {  modalIsOpen, selectedFacture } = this.state;
    const { factures } = this.props;
    console.log("factures;", factures);

    return (
      <div>
        <h2>Liste des <span className="text-primary">Facture</span></h2><br />
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>ID Facture</th>
              <th>Nom du Client</th>
              <th>Montant HT</th>
              <th>Montant TVA</th>
              <th>Montant TTC</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {factures.map((facture, index) => {
              const { totalHT, tva, ttc } = this.calculateAmounts(facture.articles);
              return (
                <tr key={index}>
                  <td>{facture.id}</td>
                  <td>{facture.client}</td>
                  <td>{totalHT.toFixed(2)}</td>
                  <td>{tva.toFixed(2)}</td>
                  <td>{ttc.toFixed(2)}</td>
                  <td>
                    <button className="btn btn-primary" onClick={() => this.openModal(facture)}>
                      Voir les détails
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {selectedFacture && (
          <Modal isOpen={modalIsOpen} onRequestClose={this.closeModal}>
            <h2>Détails de la Facture {selectedFacture.id}</h2>
            <table className="table table-bordered">
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
                {selectedFacture.articles.map((article, index) => (
                  <tr key={index}>
                    <td>{article.description}</td>
                    <td>{article.quantity}</td>
                    <td>{article.price.toFixed(2)}</td>
                    <td>{article.discount ? `${article.discount}%` : 'N/A'}</td>
                    <td>{article.amount.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button className="btn btn-secondary" onClick={this.closeModal}>
              Fermer
            </button>
          </Modal>
        )}
      </div>
    );
  }
}

export default FactureList;
