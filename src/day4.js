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
try {
    for (var _b = __values(fileContent.split(/[\r\n]+/)), _c = _b.next(); !_c.done; _c = _b.next()) {
        var line = _c.value;
        var card = line.split(/[:]/);
        card.shift();
        card = card[0].split(/[|]/);
        card[0] = card[0].trim();
        card[0] = card[0].split(/\s+/g);
        card[1] = card[1].trim();
        card[1] = card[1].split(/\s+/g);
        console.log(card);
        var points = 0;
        var winCount = 0;
        for (var i = 0; i < card[0].length; i++) {
            var winningNumber = parseInt(card[0][i]);
            for (var y = 0; y < card[1].length; y++) {
                if (parseInt(card[1][y]) === winningNumber) {
                    winCount += 1;
                }
            }
        }
        if (winCount > 0) {
            points = Math.pow(2, winCount - 1);
        }
        else {
            points = 0;
        }
        sum += points;
        console.log(sum);
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
