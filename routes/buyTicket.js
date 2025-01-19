const express = require('express');
const { docClient } = require('../dynamodb');
const { v4: uuidv4 } = require('uuid');

const router = express.Router();

router.post('/ostaa', async (req, res) => {
  const { phoneNumber, city } = req.body;
  const ticketId = uuidv4();
  const purchaseTime = new Date().toISOString();
  const expiryTime = new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString();

  const params = {
    TableName: 'Tickets',
    Item: {
      phoneNumber,
      city,
      ticketId,
      purchaseTime,
      expiryTime
    }
  };

  try {
    await docClient.put(params).promise();
    res.status(200).json({ message: 'Lippu ostettu onnistuneesti', ticketId });
  } catch (error) {
    res.status(500).json({ error: 'Lipun osto epäonnistui', details: error });
  }
});

module.exports = router;
