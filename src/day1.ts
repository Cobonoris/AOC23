import * as fs from 'fs';

const fileName: string = 'input.txt';
let fileContent = fs.readFileSync(fileName, 'utf-8');
let sum = 0;

for (let line of fileContent.split(/[\r\n]+/)){
    let match1: any = line.match(/\d|one|two|three|four|five|six|seven|eight|nine/);
    let array = line.split('').reverse().join('')
    let match2: any = array.match(/\d|eno|owt|eerht|ruof|evif|xis|neves|thgie|enin/);
    let filtered:any = [];
    filtered.push(match1[0]);
    filtered.push(match2[0]);
    
    switch(filtered[0]) {
        case 'one':
            filtered[0] = '1'; break;
        case 'two':
            filtered[0] = '2'; break;
        case 'three':
            filtered[0] = '3'; break;
        case 'four':
            filtered[0] = '4'; break;
        case 'five':
            filtered[0] = '5'; break;
        case 'six':
            filtered[0] = '6'; break;
        case 'seven':
            filtered[0] = '7'; break;
        case 'eight':
            filtered[0] = '8'; break;
        case 'nine':
            filtered[0] = '9'; break;
        default:
            break;

    }

    switch(filtered[1]) {
        case 'eno':
            filtered[1] = '1'; break;
        case 'owt':
            filtered[1] = '2'; break;
        case 'eerht':
            filtered[1] = '3'; break;
        case 'ruof':
            filtered[1] = '4'; break;
        case 'evif':
            filtered[1] = '5'; break;
        case 'xis':
            filtered[1] = '6'; break;
        case 'neves':
            filtered[1] = '7'; break;
        case 'thgie':
            filtered[1] = '8'; break;
        case 'enin':
            filtered[1] = '9'; break;
        default:
            break;

    }
    
    console.log(filtered)
    filtered = filtered[0] + filtered[1];
    sum += parseInt(filtered);
}

console.log(sum);




