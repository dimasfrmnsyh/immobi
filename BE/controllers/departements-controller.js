const AsyncHandler = require("express-async-handler");
const Departements = require("../models/Departments");

const findAll = AsyncHandler(async (req, res) => {
  const departemen = await Departements.findAll();
  res.status(200).json({
    description: "Successfully fetched Departements data!.",
    data: departemen,
  });
});

const create = AsyncHandler(async (req, res) => {
  if (!req.body.nama_departement) {
    res.status(400).json({
      description:
        "Bad request, nama_departement must be filled, this field is required!.",
    });
  }
  const payloadData = {
    nama_departement: req.body.nama_departement,
  };
  
  const data = await Departements.create(payloadData);
  res.status(200).json({
    status:true,
    description: "Successfully saved departemen data!.",
    data: data,
  });
});

const findOne = AsyncHandler(async (req, res) => {
  const departement = await Departements.findByPk(req.params.id);
  res.status(200).json({
    description: `Successfully fetch by id: ${req.params.id} departement data!.`,
    data: departement,
  });
});

const update = AsyncHandler(async (req, res) => {
  const data = await Departements.update(req.body, {
    where: { id: req.params.id },
  });
  res.status(200).json({
    status:true,

    description: `Successfully updated departemen data!.`,
    data: data,
  });
});

const remove = AsyncHandler(async (req, res) => {
  const departement = await Departements.destroy({
    where: { id: req.params.id },
  });
  res.status(200).json({
    status:true,

    description: `Successfully deleted departement data!.`,
    data: departement,
  });
});

module.exports = { findAll, create, findOne, update, remove };
