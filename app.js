
const fs = require('fs');
const inquirer = require("inquirer");

const generatePage = require("./src/page-template.js");


// function to collect user's date using inquirer method
const userInput = () => {
     return inquirer.prompt(
        [
            {
                type: 'input',
                message: 'The title of your project?',
                name: 'title',
                validate: (value) => {
                    if(value) {
                        return true;
                    } else {
                        return 'We cannot proceed without title.Please, give the name of your project.';
                    }
                }
            },

            {
                type: 'input',
                message: 'What is your GitHub Id?',
                name: 'github',
                validate: (value) => {
                    if(value) {
                        return true;
                    } else {
                        return 'Please, your user name.';
                    }
                }

            },

            {
                type: 'input',
                message: 'What is your email Id?',
                name: 'email',
                validate: (value) => {
                    if(value) {
                        return true;
                    } else {
                        return 'Please, enter your valid email address.';
                    }
                }

            },

            {
                type: 'input',
                message: 'Give a short description of your project.',
                name: 'description',
                validate: (value) => {
                    if(value) {
                        return true;
                    } else {
                        return 'Please, provide some details about your project.';
                    }
                }

            },

            {
                type: 'input',
                message: 'Give a short description of its usage.',
                name: 'usage',
                validate: (value) => {
                    if(value) {
                        return true;
                    } else {
                        return 'Please, provide some details.';
                    }
                }

            },

            {
                type: 'input',
                message: 'What is your GitHub Id?',
                name: 'github',
                validate: (value) => {
                    if(value) {
                        return true;
                    } else {
                        return 'Please, your user name.';
                    }
                }

            },

            {
                type: 'list',
                name: 'license',
                message: 'What kind of license should your project have?',
                choices: ['MIT', 'GNU', ' Mozilla', 'Perl'],
                default: ["MIT"],
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please choose a license!');
                        return false; 
                    }
                }
            },

            {
                type: 'input',
                message: 'What steps are to be taken to install your project?',
                name: 'install',
                validate: (value) => {
                    if(value) {
                        return true;
                    } else {
                        return 'Please, describe the installation process of your project.';
                    }
                }

            },

            {
                type: 'input',
                message: 'What command for testing the codes?',
                name: 'test',
                default: 'npm test'

            },


            {
                type: 'input',
                message: 'Who is/are the contributors of the project?',
                name: 'contribution',
                validate: (value) => {
                    if(value) {
                        return true;
                    } else {
                        return 'Please, provide the name of the contributor(s).';
                    }
                }

            }

        ]

    )
}
// write the file 
const readmeFile = data => fs.writeFile(`README.md`, data, err => {
    if (err) throw err;
  
    console.log('Portfolio complete! Check out README.md to see the output!');
});
 


// use the user's prompt to generate a page and make the readme file.
userInput()
.then(answers => {
    console.log(answers);
    return generatePage(answers);  
})
.then(data => {
    readmeFile(data)
})
.catch(err => {
    console.log(err);
});
