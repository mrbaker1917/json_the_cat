const request = require('request');
const args = process.argv.slice(2);
let searchAddress = 'https://api.thecatapi.com/v1/breeds/search?q=' + args[0];
request(searchAddress, (error, response, body) => {
  if (error) {
    console.log(error);
  } else if (body === '[]') {
    console.log("Sorry, that breed was not found. Try another one!");
  } else {
    const data = JSON.parse(body)[0];
    console.log(`Name: ${data.name}`);
    console.log(`Description: ${data.description}`);
  }
});