import request from 'request';
import moment from 'moment';
import dotenv from 'dotenv';
dotenv.config();

// example api call = http://api.wunderground.com/api/cdc9167d053abdfa/history_YYYYMMDD/q/CA/San_Francisco.json
// const url = 'http://api.wunderground.com/api/cdc9167d053abdfa/history_20170331/q/GA/Marietta.json'

const date = moment().subtract(1, 'day').format('YYYYMMDD'); //'20170331';
const state = 'GA';
const city = 'Marietta'
const url = `http://api.wunderground.com/api/${process.env.API_KEY}/history_${date}/q/${state}/${city}.json`;

console.log(url);

request(url, (err, res) => {
	console.log(res.statusCode, res.statusMessage);
	console.log(res.body);
});
