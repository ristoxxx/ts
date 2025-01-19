/*
 * File: dynamodb.js
 * Created Date: Sunday January 19th 2025 03:53:50
 * Author: ristoxxx@github.com
 * -----
 * Last Modified: Sunday January 19th 2025 04:45:43
 * Modified By: ristoxxx@github.com
 * -----
 * Copyright (c) 2025 ristoxxx@github.com
 */

const AWS = require('aws-sdk');
require('dotenv').config();

// AWS.config.update({
//   region: 'us-west-2',
//   endpoint: process.env.DYNAMODB_ENDPOINT
// });
// console.log("DynamoDB Endpoint:", process.env.DYNAMODB_ENDPOINT);
AWS.config.update({
    region: 'us-west-2',
    endpoint: process.env.DYNAMODB_ENDPOINT,
    accessKeyId: 'fakeMyKeyId',
    secretAccessKey: 'fakeSecretAccessKey'
});

const dynamodb = new AWS.DynamoDB();
const docClient = new AWS.DynamoDB.DocumentClient();

module.exports = { dynamodb, docClient };