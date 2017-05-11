import rp from 'request-promise';
import { expect } from 'chai';
import Weather from '../lib/WeatherFetch';

describe('Weather:', () => {
  describe('fetchPrecipSum', () => {
    it('should return a positive number', () => {
      const location = {
				state: 'GA',
				city: 'Marietta'
      };
      const days = ["20170405", "20170404", "20170403"];

      const mock = JSON.stringify({ history: { dailysummary: [ { precipi: '10' }]}});

      const rpMock = async () => { return mock; };

      return (new Weather(rpMock)).fetchPrecipSum(days, location).then((rain) => { expect(rain, 'precipitation cannot be below 0').to.be.above(0); });
    });
  });
});
