const Router = require("express").Router();
const { Propiedad } = require("../models/Propiedades");

Router.post("/create", (req, res) => {
  Propiedad.create(req.body).then(nuevaPropiedad => res.send(nuevaPropiedad));
});

Router.get("/all", (req, res) => {
  Propiedad.findAll().then(propiedades => res.send(propiedades));
});

Router.post("/update/:id", (req, res) => {
  Propiedad.update(req.body, {
    where: {
      id: req.params.id
    }
  }).then(() => res.send("Ok, done"));
});

Router.get("/delete/:id", (req, res) => {
  Propiedad.destroy({
    where: {
      id: req.params.id
    }
  }).then(() => res.send("Ok, done!"));
});

module.exports = Router;
