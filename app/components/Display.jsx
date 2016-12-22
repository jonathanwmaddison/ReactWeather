var React = require('react');


var Display = ({location, temp}) => {
	return (
		<div>
			<h3 className="text-center">The temperature in {location} is {temp} </h3>
		</div>	
	)
}
module.exports = Display;