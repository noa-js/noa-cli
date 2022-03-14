#!/usr/bin/env node

process.title = 'noa-cli';

const { program } = require('commander');
const { generate } = require('../src/generate');

program
  .version(require('../package').version)
  .argument('<project-name>', 'project name')
  .action(generate)
  .parse(process.argv);;

