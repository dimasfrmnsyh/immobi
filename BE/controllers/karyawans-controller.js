const AsyncHandler = require("express-async-handler");
const Karyawans = require("../models/Karyawans");
const Departements = require("../models/Departments");
const Jabatans = require("../models/Jabatans");

const findAll = AsyncHandler(async (req, res) => {
  const karyawan = await Karyawans.findAll({
    include: [{
        model: Departements,
    }, {
        model: Jabatans,
    }],
});

  res.status(200).json({
    description: "Successfully fetched karyawans data!.",
    data: karyawan,
  });
});

const create = AsyncHandler(async (req, res) => {
  if (!req.body.name) {
    res.status(400).json({
      description: "Bad request, name must be filled, this field is required!.",
    });
  }
  if (!req.body.id_jabatan) {
    res.status(400).json({
      description:
        "Bad request, id_jabatan must be filled, this field is required!.",
    });
  }
  if (!req.body.age) {
    res.status(400).json({
      description: "Bad request, age must be filled, this field is required!.",
    });
  }
  if (!req.body.gender) {
    res.status(400).json({
      description:
        "Bad request, gender must be filled, this field is required!.",
    });
  }
  if (!req.body.alamat) {
    res.status(400).json({
      description:
        "Bad request, alamat must be filled, this field is required!.",
    });
  }
  if (!req.body.tanggal_lahir) {
    res.status(400).json({
      description:
        "Bad request, tanggal_lahir must be filled, this field is required!.",
    });
  }
  if (!req.body.id_departement) {
    res.status(400).json({
      description:
        "Bad request, id_departement must be filled, this field is required!.",
    });
  }
  const payloadData = {
    name: req.body.name,
    id_jabatan: req.body.id_jabatan,
    age: req.body.age,
    gender: req.body.gender,
    tanggal_lahir: req.body.tanggal_lahir,
    alamat: req.body.alamat,
    id_departement: req.body.id_departement,
  };
  const data = await Karyawans.create(payloadData);
  res.status(200).json({
    sucess: true,
    description: "Successfully saved karyawan data!.",
    data: data,
  });
});

const findOne = AsyncHandler(async (req, res) => {
  const user = await Karyawans.findByPk(req.params.id);
  res.status(200).json({
    description: `Successfully fetch by id: ${req.params.id} user data!.`,
    data: user,
  });
});

const update = AsyncHandler(async (req, res) => {
  const data = await Karyawans.update(req.body, {
    where: { id: req.params.id },
  });
  res.status(200).json({
    sucess: true,
    description: `Successfully updated karyawan data!.`,
  });
});

const remove = AsyncHandler(async (req, res) => {
  const user = await Karyawans.destroy({
    where: { id: req.params.id },
  });
  res.status(200).json({
    sucess: true,
    description: `Successfully deleted user data!.`,
  });
});

module.exports = { findAll, create, findOne, update, remove };
