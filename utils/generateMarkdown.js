// function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)


## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contribution}

## Tests
${data.tests}

## License
This project is licensed under the ${data.license} license.

## Questions
GitHub: [${data.githubUsername}](https://github.com/${data.githubUsername})
Email: ${data.email}
`;
}

module.exports = generateMarkdown;