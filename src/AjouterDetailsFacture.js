import React, { Component } from 'react';
import Client from './Client';

class AjouterDetailsFacture extends Component {
  handleClientSelect = (client) => {
    this.props.onClientChange(client);
  };

  handleFactureIdChange = (event) => {
    this.props.onFactureIdChange(event.target.value);
  };

  handleDateChange = (event) => {
    this.props.onDateChange(event.target.value);
  };

  render() {
    const { client, factureId, date } = this.props;
    console.log("daata: ", client, factureId, date );

    return (
      <div>
        <h2>Ajouter une <span className="text-primary">Facture</span></h2><br />
        <div class="d-flex flex-row-reverse bd-highlight">


        </div>
        <form>
        <Client onSelectClient={this.handleClientSelect}/>
          <div className="form-group row mt-3">
            <div className="col-md-6">
              <label for="facture-id">Facture ID</label>
              <input type="text" id="facture-id" className="form-control" value={factureId} onChange={this.handleFactureIdChange}/>
            </div>
            <div className="col-md-6">
              <label for="date">Date</label>
              <input type="date" id="date" className="form-control" value={date} onChange={this.handleDateChange}/>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default AjouterDetailsFacture;
