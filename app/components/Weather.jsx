var React = require('react');
var Display = require ('Display');
var Input = require ('Input');
var ErrorModal= require('ErrorModal');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
	getInitialState: function () {
		return {
			isLoading: false
		}
	},
	handleSearch: function (location) {
		var that = this;

		this.setState({
			isLoading: true,
			errorMessage:undefined
		});

		openWeatherMap.getTemp(location).then(function (temp){
			that.setState({
				location: location,
				temp: temp,
				isLoading: false,
			});
		}, function(e){
			that.setState({
				isLoading: false,
				errorMessage: e.message
			});
		});
	},
	render: function () {
		var {isLoading, location, temp, errorMessage} = this.state;

		function renderMessage () {
			if(isLoading) {
				return <h3 className="text-center">Fetching weather...</h3>;
			} else if (temp && location) {
				return <Display location={location} temp = {temp}/>;
			}
		}
		function renderError(){
			if(typeof errorMessage ==='string'){
				return (
					<ErrorModal message={errorMessage}/>
				)
			}
		}
		return (
			<div>
				<h1 className="text-center">Get Weather</h1>
				<Input onSearch={this.handleSearch}/>
				{renderMessage()}
				{renderError()}
			</div>
		)
	}
});

module.exports = Weather;