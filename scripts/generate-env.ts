import * as yargs from 'yargs';

const fs  =  require('fs');
const dotenv = require('dotenv');
const {argv} = require('yargs');

dotenv.config();
const isProduction = process.env.ENVIRONMENT === 'production';


// Would be passed to script like this:
// `ts-node set-env.ts --environment=dev`
// we get it from yargs's argv object
const environment: any = argv.environment || '';

const targetPath = `./src/environments/environment${environment.length  > 0 ? `.${environment}` : ''}.ts`;
const envConfigFile = `
export const environment = {
    production: '${isProduction}',
    token: '${process.env.TOKEN}',
    apiUrl: '${process.env.API_URL}'};`;

fs.writeFile(targetPath, envConfigFile, err => {
  if (err) {
    console.log(err);
  }
  console.log(`Output generated at ${targetPath}`);
});

