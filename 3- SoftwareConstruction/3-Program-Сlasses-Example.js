import mongoose from 'mongoose';
const { Schema } = mongoose;

const Worker = new Schema({
    user : Worker.id,
    email: String,
    name: String
});

const Admin = new Schema({
    id: int
});

const Sign = new Schema({
    id: int,
    user: Worker.id,
    date: String,
    duration: int,
    comment: String
})

const Document = new Schema({
    id: int,
    comment: String
})

const Form = new Schema({
    id: int,
    name: String,
    description: String
})
module.export = Worker, Admin, Sign, Document, Form
