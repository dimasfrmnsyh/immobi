import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const [name, setName] = useState("");
  const [jabatan, setJabatan] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [tanggal_lahir, setTanggalLahir] = useState("");
  const [alamat, setAlamat] = useState("");
  const [dataJabatan, setDataJabatan] = useState([]);
  const navigate = useNavigate();
  const [departement, setDepartement] = useState("");
  const [dataDepartement, setDataDepartement] = useState([]);

  const listDepartement = async () => {
    const response = await axios.get(`http://localhost:4000/api/departements`);
    setDataDepartement(response.data.data);
  };
  const filterJabatan = dataJabatan.filter(
    (el) => el.id_departement === parseInt(departement)
  );
  
  const handleJabatan = (data) => {
    if(data.length>0){
      setJabatan(data[0].id)
    } else{
      setJabatan(5)
    }
  }

  const { id } = useParams();
  const payload = {
    name,
    id_jabatan: parseInt(jabatan),
    age,
    tanggal_lahir,
    alamat,
    gender,
    id_departement: parseInt(departement)
  };

  const listJabatan = async () => {
    const response = await axios.get(`http://localhost:4000/api/jabatans`);
    setDataJabatan(response.data.data);
  };

  const updateKaryawans = async (e) => {
    e.preventDefault();
    try {

      await axios.patch(`http://localhost:4000/api/karyawans/${id}`, payload);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const getKaryawanByUserId = async () => {
    const response = await axios.get(
      `http://localhost:4000/api/karyawans/${id}`
    );
    setName(response.data.data.name);
    setJabatan(response.data.data.id_jabatan);
    setAge(response.data.data.age);
    setTanggalLahir(response.data.data.tanggal_lahir);
    setAlamat(response.data.data.alamat);
    setGender(response.data.data.gender);
    setDepartement(response.data.data.id_departement)
  };
  useEffect(() => {
    setTimeout(() => {
      getKaryawanByUserId();
      listJabatan();
      listDepartement();
    }, 10);
  }, []);

  useEffect(() => {
    handleJabatan(filterJabatan)
  },[departement])
  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={updateKaryawans}>
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
            <label className="label">Jabatan</label>
            <div className="control">
              <div className="select is-fullwidth">

              <select
                  onChange={(e) => setJabatan(e.target.value)}
                  value={jabatan}
                >
                  {filterJabatan.length > 0 ? (
                    filterJabatan.map((item, index) => {
                      return (
                        <option
                          key={index}
                          value={item.id}
                          selected={jabatan == item._id}
                        >
                          {item.nama_jabatan}
                        </option>
                      );
                    })
                  ) : (
                    <option
                      value="5">
                      {"Others"}
                    </option>
                  )}
                </select>
              </div>
            </div>
          </div>
          <div className="field">
            <label className="label">Alamat</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={alamat}
                onChange={(e) => setAlamat(e.target.value)}
                placeholder="alamat"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Age</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="age"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Tanggal Lahir</label>
            <div className="control">
              <input
                type="date"
                className="input"
                value={
                  tanggal_lahir
                    ? new Date(tanggal_lahir).toISOString().substring(0, 10)
                    : ""
                }
                onChange={(e) => setTanggalLahir(e.target.value)}
                placeholder="tanggal_lahir"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Gender</label>
            <div className="control">
                  <input
                    type="radio"
                    value="L"
                    checked={gender === "L" ? true : false}
                    name="gender"
                    style={{height:"15px",width:"15px "}}
                    onChange={(e) => setGender(e.target.value)}
                  />{" "}
                  Laki Laki
                  <input
                    type="radio"
                    value="P"
                    checked={gender === "P" ? true : false}
                    name="gender"
                    style={{height:"15px",width:"15px",marginLeft: "30px"}}
                    onChange={(e) => setGender(e.target.value)}
                  />{" "}
                  Perempuan
            </div>
          </div>
          <div className="field">
            <button type="submit" className="button is-success">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
