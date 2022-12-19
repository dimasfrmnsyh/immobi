const Sequelize = require("sequelize");
const db = require("../configs/config");
const departements = require("./Departments");
const jabatans = require("./Jabatans");

const karyawans = db.define(
  "karyawans",
  {
    name: Sequelize.STRING,
    id_jabatan: Sequelize.INTEGER,
    id_departement: Sequelize.INTEGER,
    age: Sequelize.STRING,
    gender: Sequelize.ENUM("L", "P"),
    tanggal_lahir: Sequelize.DATE,
    alamat: Sequelize.STRING,
  },
  {
    tableName: "karyawans",
    timestamps: true,
  }
);

departements.hasOne(karyawans,{foreignKey:"id_departement"}); 
karyawans.belongsTo(departements,{foreignKey:"id_departement"});

jabatans.hasOne(karyawans,{foreignKey:"id_jabatan"}); 
karyawans.belongsTo(jabatans,{foreignKey:"id_jabatan"});
module.exports = karyawans;
