/*
 * File: createTable.js
 * Created Date: Sunday January 19th 2025 04:01:17
 * Author: ristoxxx@github.com
 * -----
 * Last Modified: Sunday January 19th 2025 04:04:24
 * Modified By: ristoxxx@github.com
 * -----
 * Copyright (c) 2025 ristoxxx@github.com
 */

const { dynamodb } = require('./dynamodb');

const params = {
  TableName: 'Tickets',
  KeySchema: [
    { AttributeName: 'phoneNumber', KeyType: 'HASH' },
    { AttributeName: 'city', KeyType: 'RANGE' }
  ],
  AttributeDefinitions: [
    { AttributeName: 'phoneNumber', AttributeType: 'S' },
    { AttributeName: 'city', AttributeType: 'S' }
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
