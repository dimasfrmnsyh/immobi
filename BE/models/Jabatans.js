const Sequelize = require("sequelize");
const db = require("../configs/config");
const karyawans = require("./Karyawans");


const jabatans = db.define(
  "jabatans",
  {
    nama_jabatan: Sequelize.STRING,
    id_departement: Sequelize.INTEGER,
  },
  {
    tableName: "jabatans",
    timestamps: true,
  },
);


module.exports = jabatans;

