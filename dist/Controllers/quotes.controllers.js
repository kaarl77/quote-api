"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomQuote = exports.getQuotes = void 0;
const data_1 = require("../data");
const getQuotes = (req, res, next) => {
    res.status(200).send(data_1.quotes);
};
exports.getQuotes = getQuotes;
const getRandomQuote = (req, res, next) => {
    const index = Math.floor(Math.random() * data_1.quotes.length);
    res.status(200).send(data_1.quotes[index]);
};
exports.getRandomQuote = getRandomQuote;
//# sourceMappingURL=quotes.controllers.js.map