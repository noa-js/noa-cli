const exec = require('child_process').exec;
const { resolve } = require('path');
const fs = require('fs-extra');
const chalk = require('chalk');
const repository = require('../config.json').NoaRepository;

const NOA_CONSOLE_STRING = chalk.cyan.underline.bold('Noa')

const generateErrorLog = (error) => {
  console.info(`💥 ${chalk.red('Generate')} ${NOA_CONSOLE_STRING} ${chalk.red('Template Error!')}`);
  console.error(error);
}

exports.generate = (projectName) => {
  console.info(`🚀 ${chalk.blueBright('Generating')} ${NOA_CONSOLE_STRING} ${chalk.blueBright('Template...')}`);
  console.info(`🚚 ${chalk.blueBright('Cloning')} ${NOA_CONSOLE_STRING} ${chalk.blueBright('Repository...')}`);
  exec(`git clone ${repository} ${projectName}`,
    (error) => {
      if (error) {
        generateErrorLog(error);
      } else {
        console.info(`✨ ${chalk.green('Clone')} ${NOA_CONSOLE_STRING} ${chalk.green('Repository Success!')}`);
        fs.rm(`${resolve('./')}/${projectName}/.git`,
          { recursive: true }).then(() => {
            console.info(`🎉 ${chalk.green('Generate')} ${NOA_CONSOLE_STRING} ${chalk.green('Template Success!')}`);
          }).catch((error) => {
            generateErrorLog(error);
          })
      }
    })
}
