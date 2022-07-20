const ApiError = require("../api-error");
const ContactService = require("../services/contact.service");
const MongoDB = require("../utils/mongodb.util");

exports.create = async(req, res, next) => {
    if (!req.body?.name) {
        return next(new ApiError(400, "Name is required" ));
    }

    try {
        const ContactService = new ContactService(MongoDB.client);
        const document = await ContactService.create(req.body);
        return res.send(document);
    } catch (error) {
        return next(new ApiError(500,"cannot create contact"));
    }
};

exports.findAll = (req, res) => {

    res.send({message: "findAll handler"});
};

exports.findOne = (req, res) => {
    res.send({message: "findOne handler"});
};

exports.update = (req, res) => {
    res.send({message: "update handler"});
};

exports.delete = (req, res) => {
    res.send({message: "delete handler"});
};

exports.deleteAll = (req, res) => {
    res.send({message: "deleteAll handler"});
};

exports.findAllFavorite = (req, res) => {
    res.send({message: "findAllFavorite handler"});
};

