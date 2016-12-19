// function getTempCallback (locations, callback) {
// 	callback(undefined, 78);
// 	callback('City not Found');
// }

// getTempCallback('Redwood City', function(err, temp){
// 	if (err) {
// 		console.log('error', err);
// 	} else {
// 		console.log('success', temp)
// 	}
// });

// function getTempPromise (location) {
// 	return new Promise(function(resolve, reject) {
// 		resolve(79);
// 		reject("City Not Found");
// 	});
// }

// getTempPromise('Redwood City').then(function(temp) {
// 	console.log('promise success', temp);
// }, function (err) {
// 	console.log('promise error', err);
// });

function addPromise (a, b) {
	return new Promise(function(resolve, reject) {
		if (typeof a ==='number' && typeof b === 'number') {
		resolve(a+b);
	} else {
		reject("One or Both are NaN");
		}
	});
}

addPromise(1,6).then(function(sum) {
	console.log('add success', sum)
}, function (err) {
	console.log ('error', err);
}); 