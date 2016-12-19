var axios = require('axios');

const OPEN_WEATHER_MAP_URL = "http://api.openweathermap.org/data/2.5/weather?&units=imperial&appid=dd6d0bdaf3221ec2879029366b7c65c2";

module.exports = {
	getTemp: function (location) {
		var encodedLocation = encodeURIComponent(location) //URI encodes a url it for a url
		var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
		return axios.get(requestUrl).then(function (res){
			if(res.data.cod && res.data.message) {
				throw new Error(res.data.message);
			} else {
				return res.data.main.temp;
			}
		}, function (res) {
			throw new Error(res.data.message);
		})
	}
}