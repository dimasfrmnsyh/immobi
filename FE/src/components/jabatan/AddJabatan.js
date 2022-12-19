import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const [name, setName] = useState("");
  const [departement, setDepartement] = useState("1");
  const [dataDepartement, setDataDepartement] = useState([]);
  const navigate = useNavigate();
  const listDepartement = async () => {
    const response = await axios.get(`http://localhost:4000/api/departements`);
    setDataDepartement(response.data.data);
  };
  const saveJabatan = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/api/jabatans", payload);
      navigate("/jabatan");
    } catch (error) {
      console.log(error);
    }
  };
  const payload = {
    nama_jabatan: name,
    id_departement: parseInt(departement)
  };
  useEffect(() => {
    listDepartement();
  }, []);
  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={saveJabatan}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Departement</label>
            <div className="control">
              <div className="select is-fullwidth">
                <select
                  onChange={(e) => setDepartement(e.target.value)}
                  value={departement}
                >
                  {dataDepartement.map((item, index) => {
                    return (
                      <option
                        key={index}
                        value={item.id}
                        selected={departement == item._id}
                      >
                        {item.nama_departement}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
          </div>
          <div className="field">
            <button type="submit" className="button is-success">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default AddUser;
