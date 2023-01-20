const request = require('request');
const breed = process.argv[2]; // make it dynamic
console.log(process.argv);

request(`https://ap.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {

  if (error) { //url doesnt exist
    return console.log('error:', error);
  }
  // placed after first if statement because it will give runtime error
  const data = JSON.parse(body);

  if (data.length === 0) {
    return console.log("Breed does not exist");
  }

  console.log('statusCode:', response && response.statusCode); // Print the
  console.log('Description:', data[0].description);
});