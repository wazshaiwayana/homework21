const { create } = require("domain");
const { response } = require("express");

const db = "../models/books.js";

module.exports = {

 findAll(request, response) {
  db.Book.find(request.query).then(allBooks => {
    response.json(allBooks);
  });
 },

 create(request, response) {
   db.Book.create(request.query).then(allBooks => {
     response.json(allBooks);
   });
 },

 delete(request, reponse) {
  db.Book.findById(req.params.id).then(book => {
    book.remove();
  }).then(book => {
    response.json(book);
  })
 }

 












};