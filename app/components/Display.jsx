var React = require('react');


var Display = ({location, temp}) => {
	return (
		<div>
			<p>The temperature in {location} is {temp} </p>
		</div>	
	)
}
module.exports = Display;