var React = require('react');
var Display = require ('Display');
var Input = require ('Input');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
	getInitialState: function () {
		return {
			isLoading: false
		}
	},
	handleSearch: function (location) {
		var that = this;

		this.setState({isLoading: true});

		openWeatherMap.getTemp(location).then(function (temp){
			that.setState({
				location: location,
				temp: temp,
				isLoading: false
			})
		}, function(errorMessage){
			alert("Invalid Location");
			that.setState({
				isLoading: false
			})
		})
	},
	render: function () {
		var {isLoading, location, temp} = this.state;

		function renderMessage () {
			if(isLoading) {
				return <h3 className="text-center">Fetching weather...</h3>;
			} else if (temp && location) {
				return <Display location={location} temp = {temp}/>;
			}
		}

		return (
			<div>
				<h1 className="text-center">Get Weather</h1>
				<Input onSearch={this.handleSearch}/>
				{renderMessage()}
			</div>
		)
	}
});

module.exports = Weather;