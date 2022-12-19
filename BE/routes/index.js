const express = require("express");
const routes = express.Router();
const cors = require('cors')
const karyawanController = require("../controllers/karyawans-controller");
const jabatanController = require("../controllers/jabatans-controller");
const departementController = require("../controllers/departements-controller");

routes.get("/karyawans",cors(), karyawanController.findAll);
routes.post("/karyawans",cors(), karyawanController.create);
routes.get("/karyawans/:id",cors(), karyawanController.findOne);
routes.patch("/karyawans/:id",cors(), karyawanController.update);
routes.delete("/karyawans/:id",cors(), karyawanController.remove);


routes.get("/jabatans",cors(), jabatanController.findAll);
routes.post("/jabatans",cors(), jabatanController.create);
routes.get("/jabatans/:id",cors(), jabatanController.findOne);
routes.patch("/jabatans/:id",cors(), jabatanController.update);
routes.delete("/jabatans/:id",cors(), jabatanController.remove);
routes.get("/jabatans/departements/:id",cors(), jabatanController.findJabatanByiDDepartement);


routes.get("/departements",cors(), departementController.findAll);
routes.post("/departements",cors(), departementController.create);
routes.get("/departements/:id",cors(), departementController.findOne);
routes.patch("/departements/:id",cors(), departementController.update);
routes.delete("/departements/:id",cors(), departementController.remove);

module.exports = routes;