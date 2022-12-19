import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import moment from "moment";
import Navbar from '../navbar'
const KaryawanList = () => {
  const [karyawan, setKaryawan] = useState([]);
  const getKaryawans = async () => {
    const response = await axios.get("http://localhost:4000/api/karyawans");
    setKaryawan(response.data.data);
  };

  const deleteKaryawan = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/karyawans/${id}`);
      getKaryawans();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {

      getKaryawans();

  }, []);
  return (
    <div style={{display:"flex",flexDirection:"column"}}>
      <Navbar></Navbar>
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <Link to={`karyawan/add`} className="button is-success">
          Add New
        </Link>
        <table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Tanggal Lahir</th>
              <th>Alamat</th>
              <th>Department</th>
              <th>Jabatan</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {karyawan.map((list, index) => (
              <tr key={list.id}>
                <td>{index + 1}</td>
                <td>{list.name}</td>
                <td>{list.age}</td>
                <td>{list.gender}</td>
                <td>{ moment(list.tanggal_lahir).format("DD-MM-YYYY")  }</td>
                <td>{list.alamat}</td>
                <td>{list.jabatan?.nama_jabatan}</td>
                <td>{list.departement?.nama_departement}</td>
                
                <td>
                  <Link
                    to={`karyawan/edit/${list.id}`}
                    className="button is-small is-info mr-2"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteKaryawan(list.id)}
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

export default KaryawanList;
