import React, { useEffect, useState } from 'react';
import './App.css';

function Client({ onSelectClient }) {
    const [clients, setClients] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [newClient, setNewClient] = useState({
        name: '',
        address: '',
        telephone: '',
        email: ''
    });

    useEffect(() => {
        // Get the clients from local storage
        const storedClients = localStorage.getItem('clients');
        if (storedClients) {
            // Parse the JSON string to an array
            setClients(JSON.parse(storedClients));
        }
    }, []);

    const handleSelectChange = (event) => {
        const selectedClientId = event.target.value;
        if (selectedClientId === "add") {
            setShowForm(true);
        } else {
            const selectedClient = clients.find(client => client.id === parseInt(selectedClientId, 10));
            onSelectClient(selectedClient.name);///////////////////////////////////////////////////////////////
            setShowForm(false);
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewClient((prevClient) => ({
            ...prevClient,
            [name]: value
        }));
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const updatedClients = [...clients, { id: clients.length + 1, ...newClient }];
        setClients(updatedClients);
        localStorage.setItem('clients', JSON.stringify(updatedClients));
        onSelectClient(newClient);
        setShowForm(false);
        setNewClient({ name: '', address: '', telephone: '', email: '' });
    };

    const handleCloseModal = () => {
        setShowForm(false);
        setNewClient({ name: '', address: '', telephone: '', email: '' });
    };

    return (<div>

        <div class="col-md-6">
            <label >Client</label>
            <select class="form-control" defaultValue="" onChange={handleSelectChange}>
                <option value="" disabled>Client</option>
                {clients.map((client, index) => (
                    <option key={index} value={client.id}>
                        {client.name}
                    </option>
                ))}
                <option value="add"> + Ajouter Client</option>
            </select>
        </div>



        {showForm && (
            <div className="modal">
                <div className="modal-content">
                    <span className="close" onClick={handleCloseModal}>&times;</span>
                    <form onSubmit={handleFormSubmit}>
                        <label> Nom du Client: <input type="text" name="name" value={newClient.name} onChange={handleInputChange} required /></label>
                        <label> Adresse: <input type="text" name="address" value={newClient.address} onChange={handleInputChange} required /></label>
                        <label> Téléphone: <input type="tel" name="telephone" value={newClient.telephone} onChange={handleInputChange} required /></label>
                        <label> Email: <input type="email" name="email" value={newClient.email} onChange={handleInputChange} required /></label>
                        <button type="submit" className="btn btn-primary">Ajouter</button>
                        
                    </form>
                </div>
            </div>
        )}
    </div>
    );
}

export default Client;
