import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import moment from "moment";
import Navbar from '../navbar'
const JabatanList = () => {
  const [departement, setDepartement] = useState([]);
  const getJabatan = async () => {
    const response = await axios.get("http://localhost:4000/api/departements");
    setDepartement(response.data.data);
  };

  const deleteDepartement = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/departements/${id}`);
      getJabatan();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {

      getJabatan();

  }, []);
  return (
    <div style={{display:"flex",flexDirection:"column"}}>
      <Navbar></Navbar>
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <Link to={`add`} className="button is-success">
          Add New
        </Link>
        <table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {departement.map((list, index) => (
              <tr key={list.id}>
                <td>{index + 1}</td>
                <td>{list.nama_departement}</td>
                <td>
                  <button
                    onClick={() => deleteDepartement(list.id)}
                    className="button is-small is-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default JabatanList;
