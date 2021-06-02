const Material = require('../models/material');

exports.createMaterial = (req, res, next) => {
    delete req.body._id;
    const material = new Material({
        ...req.body
     });
     material.save()
        .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
        .catch(error => res.status(401).json({ error}));
};

exports.modifyMaterial = (req, res, next) => {
    Material.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Objet modifié !'}))
      .catch(error => res.status(400).json({ error }));
};

exports.deleteMaterial = (req, res, next) => {
    Material.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
      .catch(error => res.status(400).json({ error }));
};

exports.getMaterial = (req, res, next) => {
    Material.findOne({ _id: req.params.id })
      .then(thing => res.status(200).json(thing))
      .catch(error => res.status(404).json({ error }));
  };


