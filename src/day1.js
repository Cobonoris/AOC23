"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var e_1, _a;
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var fileName = 'input.txt';
var fileContent = fs.readFileSync(fileName, 'utf-8');
var sum = 0;
var test = "trebsevenineuchet";
try {
    for (var _b = __values(fileContent.split(/[\r\n]+/)), _c = _b.next(); !_c.done; _c = _b.next()) {
        var line = _c.value;
        var match1 = line.match(/\d|one|two|three|four|five|six|seven|eight|nine/);
        var array = line.split('').reverse().join('');
        var match2 = array.match(/\d|eno|owt|eerht|ruof|evif|xis|neves|thgie|enin/);
        var filtered = [];
        filtered.push(match1[0]);
        filtered.push(match2[0]);
        switch (filtered[0]) {
            case 'one':
                filtered[0] = '1';
                break;
            case 'two':
                filtered[0] = '2';
                break;
            case 'three':
                filtered[0] = '3';
                break;
            case 'four':
                filtered[0] = '4';
                break;
            case 'five':
                filtered[0] = '5';
                break;
            case 'six':
                filtered[0] = '6';
                break;
            case 'seven':
                filtered[0] = '7';
                break;
            case 'eight':
                filtered[0] = '8';
                break;
            case 'nine':
                filtered[0] = '9';
                break;
            default:
                break;
        }
        switch (filtered[1]) {
            case 'eno':
                filtered[1] = '1';
                break;
            case 'owt':
                filtered[1] = '2';
                break;
            case 'eerht':
                filtered[1] = '3';
                break;
            case 'ruof':
                filtered[1] = '4';
                break;
            case 'evif':
                filtered[1] = '5';
                break;
            case 'xis':
                filtered[1] = '6';
                break;
            case 'neves':
                filtered[1] = '7';
                break;
            case 'thgie':
                filtered[1] = '8';
                break;
            case 'enin':
                filtered[1] = '9';
                break;
            default:
                break;
        }
        console.log(filtered);
        filtered = filtered[0] + filtered[1];
        sum += parseInt(filtered);
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
    }
    finally { if (e_1) throw e_1.error; }
}
console.log(sum);
