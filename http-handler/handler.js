'use strict';

const s3Service = require('./service/s3Service')
const dynamoDB = require('./service/dynamoDB')

module.exports.upload = async event => {
  const item = await s3Service.upload(event.body)
  await dynamoDB.put(item);

  return {
    statusCode: 201,
    body: JSON.stringify(item)
  };
};
