import rp from 'request-promise';
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

rp(url)
	.then((res) => {
		const data = JSON.parse(res)
		const precipi = data.history.dailysummary[0].precipi
		console.log(precipi);
		(precipi < 0.33) ? (console.log('water shit')) : (console.log('you good dog'))
		return res
	})
	.catch((err) => console.error(err))
