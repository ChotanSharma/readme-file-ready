// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = data => {
  let license =  `${data.license}`;
  if(!license) {
    return ''
  } else {
    return `![Lincense: ${data.license}]`;
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  switch(`${data.license}`) {
    case 'MIT':
      return `(https://img.shields.io/badge/License-MIT-yellow.svg)`;
    case 'GNU':
      return `(https://img.shields.io/badge/License-GPLv3-blue.svg)`;

    case 'Mozilla':
      return `(https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`;

    default:
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  let licenseSection = renderLicenseBadge(data);
  return licenseSection+=renderLicenseLink(data);
};


const generatePage = (data) => {
  return ` 
        ${renderLicenseSection(data)}
      # ${data.title}
      ## Description 
      ${data.description}
      ## Table of Contents
      * [Installation](#installation)
      * [Usage](#usage)
      * [License](#license)
      * [Contributing](#contributing)
      * [Tests](#tests)
      * [Questions](#questions)
      
      ## Installation 
      ${data.install}
      ## Usage 
      ${data.usage}
      ## License 
      This project is license under ${data.license}
      ## Contributing 
      ${data.contribution}
      ## Tests
      ${data.test}
      ## Questions
      please  feel easy to contact me at ${data.email}. For more of my projects, you are aways welcome to my portfolio at https://github.com/${data.github}.`
    
}
  
// use for importing Markdown in app.js
module.exports = generatePage;
