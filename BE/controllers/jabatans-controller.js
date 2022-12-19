const AsyncHandler = require("express-async-handler");
const Jabatans = require("../models/Jabatans");
const Departements = require("../models/Departments");


const findAll = AsyncHandler(async (req, res) => {
    const jabatans = await Jabatans.findAll({
        include: { model: Departements }
      });
    
    res.status(200).json({
        description : "Successfully fetched Jabatans data!.",
        data: jabatans
    });
});

const create = AsyncHandler(async (req, res) => {
    if(!req.body.id_departement){
        res.status(400).json({
            description: "Bad request, id_departement must be filled, this field is required!."
        })
    }
    if(!req.body.nama_jabatan){
        res.status(400).json({
            description: "Bad request, nama_jabatan must be filled, this field is required!."
        })
    }
    const payloadData = {
        id_departement: req.body.id_departement,
        nama_jabatan: req.body.nama_jabatan,
    };
    const data = await Jabatans.create(payloadData);
    res.status(200).json({
        description: "Successfully saved jabatans data!.",
        data: data
    });
});

const findOne = AsyncHandler(async (req, res) => {
    const jabatans = await Jabatans.findByPk(req.params.id);
    res.status(200).json({
        description : `Successfully fetch by id: ${req.params.id} jabatans data!.`,
        data: jabatans
    });
});


const update = AsyncHandler(async (req, res) => {
    const data = await Jabatans.update(req.body,{
        where: {id: req.params.id}
    });
    res.status(200).json({
        description : `Successfully updated jabatans data!.`,
        data: data
    });
});

const remove = AsyncHandler(async (req, res) => {
    const jabatans = await Jabatans.destroy({
        where: {id: req.params.id}
    });
    res.status(200).json({
        description : `Successfully deleted jabatans data!.`,
        data: jabatans
    });
});

const findJabatanByiDDepartement = AsyncHandler(async(req,res) => {
    const jabatans = await Jabatans.findAll({
        where: {id_departement: req.params.id}
    });
    res.status(200).json({
        description : `Successfully deleted jabatans data!.`,
        data: jabatans
    });
});
module.exports = {findAll, create, findOne, update, remove,findJabatanByiDDepartement} 