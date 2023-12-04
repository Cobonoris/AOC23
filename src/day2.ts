import * as fs from 'fs';

const fileName: string = 'input.txt';
let fileContent = fs.readFileSync(fileName, 'utf-8');
let sum: number = 0;
let powerSum = 0;
const red: number = 12;
const green: number = 13;
const blue: number = 14;

for (const line of fileContent.split(/[\r\n]+/)){
    let game: any = line.split(/[:]/);

    game[0] = game[0].split(/\s/);
    game[0] = parseInt(game[0][1]);

    game[1] = game[1].split(/[;]/g);
    console.log(game);
    
    let highestRed = 0;
    let highestGreen = 0;
    let highestBlue = 0;

    for(let i = 0; i < game[1].length; i++){
        game[1][i] = game[1][i].split(/[,]/g);

        for(let y = 0; y < game[1][i].length; y++){
            game[1][i][y] = game[1][i][y].trim();
            const amount = parseInt(game[1][i][y].match(/\d+/)[0]);
            const color = game[1][i][y].match(/\D+/)[0];

            switch(color){
                case ' red':
                    if(amount > highestRed) {
                        highestRed = amount;
                    }
                    break;
                case ' green':
                    if(amount > highestGreen) {
                        highestGreen = amount;
                    }
                    break;
                case ' blue':
                    if(amount > highestBlue) {
                        highestBlue = amount;
                    }
                    break;
                default:
                    break;

            }
        }
    }
    let power = highestRed * highestGreen * highestBlue;
    powerSum += power;
}
console.log(powerSum);