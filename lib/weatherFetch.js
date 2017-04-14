import rp from 'request-promise';

class Weather {

	fetchRain(url) {
		rp(url)
		.then((res) => {
			const data = JSON.parse(res)
			const precip = data.history.dailysummary[0].precipi
			console.log(precip);
			(precip < 0.33) ? (console.log('water shit')) : (console.log('you good dog'))
			return res
		})
		.catch((err) => console.error(err))
	}

}

export default new Weather();
