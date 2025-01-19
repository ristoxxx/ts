/*
 * File: removeCity.js
 * Created Date: Sunday January 19th 2025 08:26:24
 * Author: ristoxxx@github.com
 * -----
 * Last Modified: Sunday January 19th 2025 08:31:07
 * Modified By: ristoxxx@github.com
 * -----
 * Copyright (c) 2025 ristoxxx@github.com
 */

const express = require('express');
const { docClient } = require('../dynamodb');

const router = express.Router();

router.delete('/poista', async (req, res) => {
    const { cityName, availability } = req.body;

    const params = {
      TableName: 'Cities',
      Key: {
        cityName,
        availability
      }
    };
  
    try {
      await docClient.delete(params).promise();
      res.status(200).json({ message: 'Kaupunki poistettu onnistuneesti', cityName });
    } catch (error) {
      res.status(500).json({ error: 'Kaupungin poisto epäonnistui', details: error });
    }
      }
  );
  
  module.exports = router;