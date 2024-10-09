import inquirer from "inquirer";
import qr from 'qr-image'
import fs from 'fs'

inquirer
  .prompt([
    /* Pass your questions in here */
    {
      name: "URL",
      message: "type your URL",
    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const url = answers.URL
    // var qr = require("qr-image");

    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr-image.png"));

    var svg_string = qr.imageSync("I love QR!", { type: "svg" });

    console.log(answers);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
