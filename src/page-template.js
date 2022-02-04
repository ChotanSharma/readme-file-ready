const generatePage = data => {
    return `# ${data.title}

    [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
    
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
    please  feel easy to contact me at ${data.email}. For more of my projects, you are aways welcome to my portfolio at https://github.com/${data.github}.
  `;
  }
  
  
  // use for importing Markdown in app.js
  module.exports = generatePage;
