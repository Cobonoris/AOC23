import * as fs from 'fs';

const fileName: string = 'input.txt';
let fileContent = fs.readFileSync(fileName, 'utf-8');