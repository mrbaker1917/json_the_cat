const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  let searchAddress = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedName;
  request(searchAddress, (error, response, body) => {
    let description = "";
    if (body === '[]') {
      description = "Sorry, that breed was not found. Try another one!";
    } else {
      const data = JSON.parse(body)[0];
      description = data.description;
    }
    callback(error, description);
  });
};

module.exports = { fetchBreedDescription };