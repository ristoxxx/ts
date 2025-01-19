/*
 * File: createCitiesTable.js
 * Created Date: Sunday January 19th 2025 06:29:49
 * Author: ristoxxx@github.com
 * -----
 * Last Modified: Sunday January 19th 2025 06:52:39
 * Modified By: ristoxxx@github.com
 * -----
 * Copyright (c) 2025 ristoxxx@github.com
 */
const { dynamodb } = require('./dynamodb');

const params = {
  TableName: 'Cities',
  KeySchema: [
    { AttributeName: 'cityName', KeyType: 'HASH' },
    { AttributeName: 'availability', KeyType: 'RANGE' }
  ],
  AttributeDefinitions: [
    { AttributeName: 'cityName', AttributeType: 'S' },
    { AttributeName: 'availability', AttributeType: 'N' },
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 5,
    WriteCapacityUnits: 5
  }
};

dynamodb.createTable(params, (err, data) => {
  if (err) {
    console.error('Unable to create table. Error JSON:', JSON.stringify(err, null, 2));
  } else {
    console.log('Created table. Table description JSON:', JSON.stringify(data, null, 2));
  }
});
const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();


