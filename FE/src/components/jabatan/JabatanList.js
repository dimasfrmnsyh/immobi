import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import moment from "moment";
import Navbar from '../navbar'
const JabatanList = () => {
  const [karyawan, setKaryawan] = useState([]);
  const getJabatan = async () => {
    const response = await axios.get("http://localhost:4000/api/jabatans");
    setKaryawan(response.data.data);
  };

  const deleteJabatans = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/jabatans/${id}`);
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
              <th>Departemen</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {karyawan.map((list, index) => (
              <tr key={list.id}>
                <td>{index + 1}</td>
                <td>{list.nama_jabatan}</td>
                <td>{list.departement?.nama_departement}</td>
                <td>
                  <button
                    onClick={() => deleteJabatans(list.id)}
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
