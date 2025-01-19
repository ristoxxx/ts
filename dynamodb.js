const AWS = require('aws-sdk');
require('dotenv').config();

AWS.config.update({
  region: 'us-west-2',
  endpoint: process.env.DYNAMODB_ENDPOINT
});

const dynamodb = new AWS.DynamoDB();
const docClient = new AWS.DynamoDB.DocumentClient();

module.exports = { dynamodb, docClient };
