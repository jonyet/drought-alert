import Weather from './lib/weatherFetch';
import moment from 'moment';

const location = {
				state: 'GA',
				city: 'Marietta'
};

const alertTrueData = ["20170405", "20170404", "20170403"];
const alertFalseData = ["20170414", "20170413", "20170412"];

const threshold = [
	moment().subtract(1, 'day').format('YYYYMMDD'),
	moment().subtract(2, 'day').format('YYYYMMDD'),
	moment().subtract(3, 'day').format('YYYYMMDD')
];

let rainfall = Weather.fetchPrecipSum(threshold, location);

rainfall.then(function(result) {
   console.log(`${result} inches of rainfall in the last three days`);
	 if (result < 0.5) {
		 console.log('alert user to water');
	 } else {
		 console.log('do not throw an alert');
	 }
});
