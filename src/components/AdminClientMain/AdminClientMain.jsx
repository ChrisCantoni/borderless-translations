import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import AdminClientModal from '../AdminClientModal/AdminClientModal';
import './AdminClientMain.css';

function AdminClientMain() {

const dispatch = useDispatch();
const [modalOpen, setModalOpen] = useState(false);
const clients = useSelector(store => store.allClients);

useEffect(() => {
  dispatch({ type: "GET_ALL_CLIENTS" });
}, [modalOpen]);

const handleAddClient = () => {
  setModalOpen(true)
}

  return (
    <div className="container">
      <h2>Admin Client Main</h2>
      <button onClick={() => handleAddClient()}>Add Client</button>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Bidding Projects</td>
            <td>Open Projects</td>
            <td>Complete Projects</td>
          </tr>
        </thead>
        <tbody>
          {clients.map(client => {
            return (
              <tr key={client.id}>
                <td>
                  <Link to={`/client/details/${client.id}`}>{client.client}</Link>  
                </td>
                <td>{client.bidding_projects}</td>
                <td>{client.open_projects}</td>
                <td>{client.complete_projects}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {modalOpen && <AdminClientModal closeModal={() => { setModalOpen(false)}} defaultValues={null} />}

    </div>
  );
};

export default AdminClientMain;