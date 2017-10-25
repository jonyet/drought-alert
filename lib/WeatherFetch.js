import rp from 'request-promise';
import dotenv from 'dotenv';

dotenv.config();

class Weather {
  
  async fetchPrecipSum(days, location) {
    let precip = 0;
    
    for (let date of days) {
      let inches = await this.fetchRainPast(date, location);
      precip = precip + (parseFloat(inches));
      console.log(`inches for ${date}: ${inches}`);
      console.log(`precip sum: ${precip}`);
    }
    return precip;
  };
  
  fetchRainPast(date, location) {
    let url = this.urlgen(date, location);
    return rp(url).then((res) => {
      const data = JSON.parse(res);
      return data.history.dailysummary[0].precipi;
    }).catch((err) => console.error(err));
  };
  
  urlgen(date, location) {
    return `http://api.wunderground.com/api/${process.env.API_KEY}/history_${date}/q/${location.state}/${location.city}.json`;
  };
}

export default Weather;
