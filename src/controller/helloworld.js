'use strict';

module.exports.hello = (event, context, callback) => {
    const response = {
        statusCode: 200,
        body: 'hello world!',
    };
    callback(null, response);
};
