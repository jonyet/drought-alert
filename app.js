import Weather from './lib/weatherFetch';
import Alert from './lib/alert';
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

Weather.fetchPrecipSum(threshold, location).then((res) => {
   console.log(`${res} inches of rainfall in the last three days`);
	 if (res < 0.3) {
		 Alert.slack('#drought-alert', 'water us');
	 }
});
