const UserModel = require('../models/Users');
// blog_index, blog_details , blog_create_get, blog_create_post , blog_delete

const createUser = (req, res) => {
    UserModel.create(req.body)
        .then(users => {
            res.json(users);
        })
        .catch((err) => {
            res.status(400).json('Error: ' + err);
        })
}
const find =(req,res) =>{
    UserModel.find()
        .then(users => {
            res.json(users);
        })
        .catch((err) => {
            res.status(400).json('Error: ' + err);
        })
}

const getUser =(req,res) =>{
    const id=req.params.id;
    UserModel.findById(id)
        .then(users => {
            res.json(users);
        })
        .catch((err) => {
            res.status(400).json('Error: ' + err);
        })
}

const updateUser =(req,res) =>{
    const id=req.params.id;
    UserModel.findByIdAndUpdate(id,{
        name:req.body.name,
        email:req.body.email,
        age:req.body.age
    })
        .then(users => {
            res.json(users);
        })
        .catch((err) => {
            res.status(400).json('Error: ' + err);
        })
}

const deleteUser = (req,res) =>{
    const id=req.params.id;
    UserModel.findByIdAndDelete(id)
        .then(users => {
            res.json(users);
        })
        .catch((err) => {
            res.status(400).json('Error: ' + err);
        })
}
module.exports = {
    createUser,
    find,
    getUser,
    updateUser,
    deleteUser
}