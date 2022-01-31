
const inquirer = require("inquirer");
const fs = require('fs');
//const generatePage = require('./src/page-template');
console.log(inquirer);

const generatePage = () => {
    return `
    # readme.md-file-ready
    ## Table of Contents:
    `
}


// fs.writeFile('README.md', generatePage(), err => {
    //if (err) throw err;
  
    //console.log('Portfolio complete! Check out README.md to see the output!');
  //});