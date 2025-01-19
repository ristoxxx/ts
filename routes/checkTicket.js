const express = require('express');
const { docClient } = require('../dynamodb');

const router = express.Router();

router.get('/tarkasta/:ticketId', async (req, res) => {
  const { ticketId } = req.params;

  const params = {
    TableName: 'Tickets',
    FilterExpression: 'ticketId = :ticketId',
    ExpressionAttributeValues: { ':ticketId': ticketId }
  };

  try {
    const result = await docClient.scan(params).promise();
    if (result.Items.length > 0) {
      const ticket = result.Items[0];
      const now = new Date().toISOString();
      if (ticket.expiryTime > now) {
        res.status(200).json({ message: 'Lippu on voimassa', ticket });
      } else {
        res.status(400).json({ message: 'Lippu on vanhentunut' });
      }
    } else {
      res.status(404).json({ message: 'Lippua ei löytynyt' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Lipuntarkastus epäonnistui', details: error });
  }
});

module.exports = router;
