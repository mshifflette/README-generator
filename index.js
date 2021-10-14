// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const licenses = [
    {
        name:"Apache 2.0 License",
        badge:`[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    },
    {
        name:"Boost Software License 1.0",
        badge:`[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
    },
    {
        name:"Mozilla Public License 2.0",
        badge:`[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
    },
    {
        name:'The MIT License',
        badge:`[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    }
];
inquirer.prompt([
    {
        type: 'input',
        name: 'projectname',
        message: 'What is your project name?'
    },
    {
        type: 'input',
        message: 'Please give a description of your project.',
        name: 'description'
    },
    {
        type: 'input',
        message: 'What are the instructions to install your application?',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'What is the usage information about your application?',
        name: "usage"
    },
    {
        type: 'list',
        message: 'What is the license of your application?',
        name: "license",
        choices:[licenses[0].name,licenses[1].name,licenses[2].name,licenses[3].name]
    },
    {
        type: 'input',
        message: 'What are the contribution guidelines for your application?',
        name: "contributing"
    },
    {
        type: 'input',
        message: 'What are the instructions to test your application?',
        name: "test"
      },
      {
        type: 'input',
        message: 'What is your email address?',
        name: "email"
      },
      {
        type: 'input',
        message: 'What is github username?',
        name: "github"
      }
    
  ])
  .then((data) => {
    let badge = "";
    function renderLicenseBadge() {
        if (data.license === licenses[0]){
         badge = licenses[0].badge;
      }else if(data.license === licenses[1]){
         badge = licenses[1].badge;
      }else if(data.license === licenses[2]){
         badge = licenses[2].badge;
      }else {
         badge = licenses[3].badge;
      }
      }
    renderLicenseBadge();
    const filename = `./generated-READMEs/README.MD`;
    let content = `
# ${data.projectname}
${badge}

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

${data.installation}


## Usage

${data.usage}

## License

This project is licensed under the ${data.license}
    
## Contributing

${data.contributing}

## Tests

${data.test}

## Questions

If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.github}](https://github.com/${data.github}/).`
    fs.writeFile(filename, content, err => {
        if (err) {
          console.error(err)
          return
        }
  });
});


