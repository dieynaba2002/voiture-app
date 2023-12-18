import React from 'react'
import Table from "react-bootstrap/Table";

const Voitures = ({voitures}) => {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Marque</th>
            <th>Couleur</th>
            <th>Annee</th>
          </tr>
        </thead>
        <tbody>
          {voitures.map((voiture, i) => (
            <tr key={i}>
              <td>{voiture.id}</td>
              <td>{voiture.marque}</td>
              <td>{voiture.couleur}</td>
              <td>{voiture.annee}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Voitures
