const express = require('express');
const router = express.Router();

// Function to handle the logic for the route
exports.handleHelloRequest = function(req, res) {
  try {
    msg = 'Hello, World!'
    console.log(msg)
    res.status(200).json({msg: msg});
  } catch (error) {
    console.error('Error occurred:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}


