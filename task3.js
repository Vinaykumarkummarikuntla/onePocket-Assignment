const fs = require('fs');

const filename = './data.txt';
let wordCount = 0;

async function readData() {
    try {
      const data = await new Promise((resolve, reject) => {
        fs.readFile(filename, (err, data) => {
          if (err){ 
          reject(err);
          }
          else {
            resolve(data);
          }
        });
      });
  
      const words = data.toString().split(' ');
      wordCount = words.length;
      
      console.log(`The file ${filename} has ${wordCount} words.`);
    } catch (err) {
      console.error(err);
    }
  }
  
  readData();
