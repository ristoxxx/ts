/*
 * File: addCity.js
 * Created Date: Sunday January 19th 2025 06:55:49
 * Author: ristoxxx@github.com
 * -----
 * Last Modified: Sunday January 19th 2025 07:07:38
 * Modified By: ristoxxx@github.com
 * -----
 * Copyright (c) 2025 ristoxxx@github.com
 */
const express = require('express');
const { docClient } = require('../dynamodb');

const router = express.Router();

router.post('/kaupunki', async (req, res) => {
    const { cityName, availability } = req.body;

  
    const params = {
      TableName: 'Cities',
      Item: {
        cityName,
        availability
      }
    };
  
    try {
      await docClient.put(params).promise();
      res.status(200).json({ message: 'Kaupunki lisäätty onnistuneesti', cityName });
    } catch (error) {
      res.status(500).json({ error: 'Kaupungin lisäys epäonnistui', details: error });
    }
  });
  
  module.exports = router;