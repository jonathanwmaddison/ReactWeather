var names = ['Chezz', 'Isabel', 'Baba']

// names.forEach(function(name){
// 	console.log('forEach', name);
// });

// names.forEach((name) => {
// 	console.log('arrowFunc', name);
// });

// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';

// console.log(returnMe('Jonathan'));

// var person = {
// 	name: 'Jonathan',
// 	greet: function () {
// 		names.forEach((name)=>{
// 			console.log(this.name +' says hi to '+ name)
// 		});
// 	}
// };

// person.greet();

function add (a, b) {
	return console.log(a+b);
}
add(1,2);

var addArrowFunc = (a,b) => {
	return console.log(a+b);
};

var addArrowExpress = (a, b) => console.log(a+b);

addArrowFunc(3,4);
addArrowExpress(1,4);
