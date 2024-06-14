import React, { Component } from 'react';

class AjouterDetailsFacture extends Component {
  render() {
    return (
      <div>
        <h2>Ajouter une <span className="text-primary">Facture</span></h2><br />
        <div class="d-flex flex-row-reverse bd-highlight">

          <input type="bouton" id="annuler" className="btn btn-primary mb-3 m-2 " value="Annuler" />
          <input type="bouton" id="ajouter" className="btn btn-primary mb-3 m-2" value="Ajouter" />
        </div>
        <form>
          <div className="form-group">
            <label for="client">Client</label>
            <select id="client" className="form-control">
              <option>Sélectionner un client</option>
              <option>Client 1</option>
              <option>Client 2</option>
            </select>
          </div>
          <div className="form-group row">
            <div className="col-md-6">
              <label for="facture-id">Facture ID</label>
              <input type="text" id="facture-id" className="form-control" />
            </div>
            <div className="col-md-6">
              <label for="date">Date</label>
              <input type="date" id="date" className="form-control" />
            </div>
          </div>
          <div className="form-group">
            <button type="button" className="btn btn-link" onClick={this.props.addArticle}>+ Ajouter un Article</button>
          </div>
        </form>
      </div>
    );
  }
}

export default AjouterDetailsFacture;
