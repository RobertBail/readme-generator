const inquirer = require("inquirer");
const fs = require("fs");

const generateREADME = ({ Title, Description, Installation, Usage, License,
Contributing, Tests, Question1, Question2}) =>
  `# ${Title}
  ## Description
  ${Description}
  ## Table of Contents:
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  ## Installation
  ${Installation}
  ## Usage
  ${Usage}
  ## License
  ${License}
  ## Contributing
  ${Contributing}
  ## Tests
  ${Tests}
  ## Questions
  Where to find us on GitHub? 
  ${Question1}
  How to contact us?
  ${Question2}
  `;

inquirer
  .prompt([
    {
      type: "input",
      name: "Title",
      message: "What is the title of this app?",
    },
    {
      type: "input",
      name: "Description",
      message: "Write a description of this app.",
    },
    {
      type: "input",
      name: "Installation",
      message: "Enter the installation instructions.",
    },
    {
      type: "input",
      name: "Usage",
      message: "Enter the usage information.",
    },
    {
      type: "list",
      name: "License",
      message: "Select a license.",
      choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3"],
    },
    {
      type: "input",
      name: "Contributing",
      message: "Enter the contribution guidelines.",
    },
    {
      type: "input",
      name: "Tests",
      message: "Enter the test instructions.",
    },
    {
      type: "input",
      name: "Question1",
      message: "Enter your GitHub profile link.",
    },
    {
      type: "input",
      name: "Question2",
      message: "Enter your email address.",
    },
  ])
  .then((answers) => {
    const readmeContent = generateREADME(answers);

    fs.writeFile("README.md", readmeContent, (err) =>
      err ? console.log(err) : console.log("You've successfully created a README.md!")
    );
  });