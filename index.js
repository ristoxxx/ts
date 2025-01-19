const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const buyTicketRoute = require('./routes/buyTicket');
const checkTicketRoute = require('./routes/checkTicket');
const checkAvailabilityRoute = require('./routes/checkAvailability');
const addCityRoute = require('./routes/addCity');
const removeCityRoute = require('./routes/removeCity');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.json());
app.use('/api', buyTicketRoute);
app.use('/api', checkTicketRoute);
app.use('/api', checkAvailabilityRoute);
app.use('/api', addCityRoute);
app.use('/api', removeCityRoute);

app.listen(port, () => {
  console.log(`Ticketing system API running on http://localhost:${port}`);
});
