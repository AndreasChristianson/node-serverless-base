import request from 'request';

module.exports.get = (event, context, callback) => {
    const weather = request('https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22');
    const response = {
        statusCode: 200,
        body: weather,
    };
    callback(null, response);
};