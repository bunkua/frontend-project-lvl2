#!/usr/bin/env node

import { program } from 'commander';
import genDiff from '../index.js';

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .action((filepath1, filepath2, option) => {
    const diff = genDiff(filepath1, filepath2, option.format);
    console.log(diff);
  })
  .version('0.0.1a');

program.parse();
