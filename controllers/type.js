const Type = require('../models/type');

exports.createType = (req, res, next) => {
    delete req.body._id;
    const type = new Type({
        ...req.body
     });
     console.log('passe dans le create');
     type.save()
        .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
        .catch(error => res.status(401).json({ error}));
};

exports.modifyType = (req, res, next) => {
    Type.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Objet modifié !'}))
      .catch(error => res.status(400).json({ error }));
};

exports.deleteType = (req, res, next) => {
    Type.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
      .catch(error => res.status(400).json({ error }));
};

exports.getType = (req, res, next) => {
    Type.findOne({ _id: req.params.id })
      .then(thing => res.status(200).json(thing))
      .catch(error => res.status(404).json({ error }));
};


