// asyncBreeds.js
const fs = require('fs');

const cb = (data) => {
  console.log('Return Value: ', data);
};

const breedDetailsFromFile = function(breed, cb) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    if (!error) {
      cb(data);
    }
  });
};

// we try to get the return value
breedDetailsFromFile('Bombay', cb);