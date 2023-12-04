import * as fs from 'fs';

const fileName: string = 'input.txt';
let fileContent = fs.readFileSync(fileName, 'utf-8');
let sum = 0;

for (const line of fileContent.split(/[\r\n]+/)){
    let card: any = line.split(/[:]/);
    card.shift();
    card = card[0].split(/[|]/);

    card[0] = card[0].trim();
    card[0] = card[0].split(/\s+/g);

    card[1] = card[1].trim();
    card[1] = card[1].split(/\s+/g);
    
    console.log(card);
    
    
    let points = 0;
    let winCount = 0;

    for (let i = 0; i < card[0].length; i++) {
        let winningNumber = parseInt(card[0][i]);
        
        for (let y = 0; y < card[1].length; y++) {
            if(parseInt(card[1][y]) === winningNumber) {
                winCount += 1;
            }
        }
    }
    if(winCount > 0){
       points = Math.pow(2,winCount - 1); 
    } else {
        points = 0;
    }
    
    sum += points;
    console.log(sum);
}
console.log(sum);