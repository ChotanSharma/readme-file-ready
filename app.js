const fs = require('fs');
//const inquirer = require("inquirer");


const generatePage = () => {
    return `
    # readme.md-file-ready
    ## Table of Contents:
    `
}


fs.writeFile('README.md', generatePage(), err => {
    if (err) throw err;
  
    console.log('Portfolio complete! Check out README.md to see the output!');
  });