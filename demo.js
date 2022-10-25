// let _ = require('lodash')

// console.log(_.random(1, 100))

// var fs = require('fs')

// var data = require('./data.json')

// console.log(data.name)

// fs.readFile('./data.json', 'utf-8', (err, data) => {
// 	let dataFromString = JSON.parse(data)
// 	console.log(dataFromString.name)
// })

var fs = require('fs')

fs.readdir('chris:/', (err,data) => {
	console.log(data)
})

var data = {
	name: "bobby"
}

fs.writeFile('data.json', JSON.stringify(data), (err) => {
	console.log('write finished', err);
})