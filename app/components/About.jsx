var React = require('react');

const imgSize = {
	width: "90px",
	height: "90px"
}

const imgSizeSmall = {
	width: "45px",
	"margin-left": "20px",
	height: "45px"
}

var About = (props) => {
	return (
		<div>
			<h1 className="text-center page-title">About</h1>
			<div>
			This app is part of the <a target="_blank" href="https://www.udemy.com/the-complete-react-web-app-developer-course/learn/v4/">Udemy React class</a> taught by Andrew Mead. I am learning
			and software engineering through Udemy, freeCodeCamp and many other excellent references.
			This weather app uses the <a target="_blank" href="https://openweathermap.org/">OpenWeatherMap</a> free API to check weather. The page was built with the following tools: 
			</div>
			<div className="row">
  				<div className="small-4 large-4 columns"><h5> React </h5>
  					<a target="_blank" href="https://en.wikipedia.org/wiki/React_(JavaScript_library)"className="thumbnail">
  						<img style = {imgSize} src="http://coenraets.org/present/react/img/react.png"/>
 					</a>
 				</div>
 				<div className="small-4 large-4 columns"><h5> Foundation </h5>
  					<a target="_blank" href="https://en.wikipedia.org/wiki/Foundation_(framework)"className="thumbnail">
  					<img style = {imgSize} src="http://picotto-wp.urbanjonathan.com/wp-content/uploads/2014/02/yeti.png"/>
  					</a>
  				</div>
 				<div className="small-4 large-4 columns"><h5> Javascript </h5>
  					<a target="_blank" href="https://en.wikipedia.org/wiki/JavaScript"className="thumbnail">
  					<img style = {imgSize} src="http://www.javatpoint.com/images/javascript/javascript_logo.png"/>
  					</a>
  				</div>
 			</div>
 			<br/>
 			<h6 className="text-center">Jonathan Maddison</h6>
			<div className="row text-center">
  				
  					<a target="_blank" href="https://www.freecodecamp.com/jonathanwmaddison">
  						<img style = {imgSizeSmall} src="https://avatars0.githubusercontent.com/u/9892522?v=3&s=200"/>
 					</a>
 				
  					<a target="_blank" href="https://www.linkedin.com/in/jonathan-maddison-a67b7930
" >
  					<img style = {imgSizeSmall} src="https://lh3.googleusercontent.com/00APBMVQh3yraN704gKCeM63KzeQ-zHUi5wK6E9TjRQ26McyqYBt-zy__4i8GXDAfeys=w300"/>
  					</a>
  					<a target="_blank" href="https://github.com/jonathanwmaddison">
  					<img style = {imgSizeSmall} src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png"/>
  					</a>
 			</div>

		</div>
	)
};

module.exports = About;