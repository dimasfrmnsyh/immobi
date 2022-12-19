const Sequelize = require("sequelize");
const db = require("../configs/config");
const jabatans = require("./Jabatans");
const karyawans = require("./Karyawans");

const departements = db.define(
  "departements",
  {
    nama_departement: Sequelize.STRING,
  },
  {
    tableName: "departements",
    timestamps: true,
  },
);

departements.hasOne(jabatans,{foreignKey:"id_departement"}); 
jabatans.belongsTo(departements,{foreignKey:"id_departement"}); 





module.exports = departements;
