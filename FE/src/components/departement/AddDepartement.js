import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();
 
  const saveDepartement = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/api/departements", payload);
      navigate("/departement");
    } catch (error) {
      console.log(error);
    }
  };
  const payload = {
    nama_departement: name,
  };
 
  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={saveDepartement}>
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
