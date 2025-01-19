const express = require('express');
const { docClient } = require('../dynamodb');

const router = express.Router();

router.get('/saatavuus/:city', async (req, res) => {
  const { city } = req.params;

  const params = {
    TableName: 'Cities',
    FilterExpression: 'cityName = :city',
    ExpressionAttributeValues: {
      ':city': city
    }
  };

  try {
    console.log(`Checking availability for city: ${city}`);
    const result = await docClient.scan(params).promise();
    console.log('Result:', result);

    if (result.Items.length > 0) {
      res.status(200).json({ message: `Kaupunki ${city} on listalla`, status: result.Items[0].availability });
    } else {
      res.status(404).json({ message: `Kaupunki ${city} ei ole saatavilla` });
    }
  } catch (error) {
    console.error('Error checking availability:', error);
    res.status(500).json({ error: 'Saatavuuden tarkistus epäonnistui', details: error });
  }
});

router.delete('/poista/:city', async (req, res) => {
  const { city } = req.params;

  const params = {
    TableName: 'Cities',
    Key: {
      cityName: city
    }
  };

  try {
    await docClient.delete(params).promise();
    res.status(200).json({ message: `Kaupunki ${city} poistettu onnistuneesti` });
  } catch (error) {
    res.status(500).json({ error: 'Kaupunkin poisto epäonnistui', details: error });
  }
});
    

module.exports = router;


