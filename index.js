import inquirer from 'inquirer';
 import fs from 'fs';
 import path from 'path';
 import generateMarkdown from './utils/generateMarkdown.js';
 
 
 // TODO: Create an array of questions for user input
 const questions = [{
 
 type: 'input',
 name: 'title',
 message: 'What is the title of your project?'

}, {
 
 type: 'input',
 name: 'description',
 message: 'Please provide a description of your project.'
 
}, {
 
 type: 'input',
 name: 'Table of Contents',
 message: 'Please provide a table of contents for your project.'
 
 }, {
 
 type: 'input',
 name: 'installation',
 message: 'Please provide installation instructions for your project.'
 
}, {
 
 type: 'input',
 name: 'usage',
 message: 'Please provide usage information for your project.'

 
}, {

 type: 'input',
 name: 'test',
 message: 'Please provide test instructions for your project.'

}, {
 
 type: 'input',
 name: 'contribution',
 message: 'Please provide contribution guidelines for your project.'
 

}, {

 type: 'list',
 name: 'license',
 message: 'Please choose a license for your project.',
 choices: ['MIT', 'Apache', 'GPL', 'None']
 
}, {
 
 type: 'input',
 name: 'Questions',
 message: 'Please provide contact information for inquiries.'
 
}, {
 
type: 'input',
name: 'email',
message: 'Please provide your email address.'
    
}, {
 
type: 'input',
 name: 'github',
 message: 'Please provide your GitHub username.'
 

 }
 ];
 
 
 
 // TODO: Create a function to write README file
 function writeToFile(fileName, data) {
 const dir = path.dirname(fileName);
 if (!fs.existsSync(dir)) {
 fs.mkdirSync(dir, { recursive: true });
 }
 return fs.writeFileSync(fileName, data);
 
 
 }
 
 // TODO: Create a function to initialize app
 function init() {
 inquirer
 .prompt(questions)
 .then((data) => {
 console.log('Data received from prompts:', data);
 const markdown = generateMarkdown(data);
 console.log('Generated Markdown:', markdown);
 writeToFile('./dist/README.md', markdown);
 console.log('README.md file created successfully!');
 })
 .catch((err) => {
 console.log(err);
 });
 }
 // Function call to initialize app
 init();



