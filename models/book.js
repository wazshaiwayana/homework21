
const mongoose = require("mongoose");
const { link } = require("fs");
const Schema = mongoose.Schema;

const BooksSchema = new Schema({
  Title: {
    type: String,
    trim: true,
    required: true
  },

  Authors: {
    type: String,
    unique: true,
    required: true
  },

  Description: {
    type: String,
    required: true
    
  },

  Image: {
      type: String,
      required: true
  },

  Link: {
    type: String,
    required: true

  }
});

const Books = mongoose.model("Books", BooksSchema);

module.exports = Books;


