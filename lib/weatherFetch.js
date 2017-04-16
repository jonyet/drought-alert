import rp from 'request-promise';
import moment from 'moment';
import dotenv from 'dotenv';
dotenv.config();

class Weather {

	async fetchPrecipSum(days, location, next) {
		let precip = 0;

		for (let date of days) {
			let inches = await this.fetchRainPast(date, location)
			precip = precip + (parseFloat(inches));
			console.log(`inches this day: ${inches}`);
			console.log(`precip sum: ${precip}`);
			// (precip.length === days.length) ? console.log("i'm all done!") : (console.log("let's keep moving"));
		}

	}

	fetchRainPast(date, location) {
		let url = this.urlgen(date, location);
		return rp(url)
		.then((res) => {
			const data = JSON.parse(res)
			const precip = data.history.dailysummary[0].precipi;
			return precip
		})
		.catch((err) => console.error(err))
	}

	urlgen(date, location) {
		const url = `http://api.wunderground.com/api/${process.env.API_KEY}/history_${date}/q/${location.state}/${location.city}.json`;
		return url
	}

}

export default new Weather();
