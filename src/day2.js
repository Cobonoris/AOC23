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
var powerSum = 0;
var red = 12;
var green = 13;
var blue = 14;
try {
    for (var _b = __values(fileContent.split(/[\r\n]+/)), _c = _b.next(); !_c.done; _c = _b.next()) {
        var line = _c.value;
        var game = line.split(/[:]/);
        game[0] = game[0].split(/\s/);
        game[0] = parseInt(game[0][1]);
        game[1] = game[1].split(/[;]/g);
        console.log(game);
        var highestRed = 0;
        var highestGreen = 0;
        var highestBlue = 0;
        for (var i = 0; i < game[1].length; i++) {
            game[1][i] = game[1][i].split(/[,]/g);
            for (var y = 0; y < game[1][i].length; y++) {
                game[1][i][y] = game[1][i][y].trim();
                var amount = parseInt(game[1][i][y].match(/\d+/)[0]);
                var color = game[1][i][y].match(/\D+/)[0];
                switch (color) {
                    case ' red':
                        if (amount > highestRed) {
                            highestRed = amount;
                        }
                        break;
                    case ' green':
                        if (amount > highestGreen) {
                            highestGreen = amount;
                        }
                        break;
                    case ' blue':
                        if (amount > highestBlue) {
                            highestBlue = amount;
                        }
                        break;
                    default:
                        break;
                }
            }
        }
        var power = highestRed * highestGreen * highestBlue;
        powerSum += power;
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
    }
    finally { if (e_1) throw e_1.error; }
}
console.log(powerSum);
