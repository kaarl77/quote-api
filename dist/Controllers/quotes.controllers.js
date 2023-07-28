"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postQuote = exports.getRandomQuote = exports.getQuotes = void 0;
const data_1 = require("../data");
const getQuotes = (req, res, next) => {
    res.status(200).send({ quotes: data_1.quotes });
};
exports.getQuotes = getQuotes;
const getRandomQuote = (req, res, next) => {
    const index = Math.floor(Math.random() * data_1.quotes.length);
    res.status(200).send({ quote: data_1.quotes[index] });
};
exports.getRandomQuote = getRandomQuote;
const postQuote = (req, res, next) => {
    // const { quote, person } = req.query;
    // if (quote && person) {
    // quotes.push({ quote, person });
    // res.status(201).send({ quote: { quote, person } });
    // } else {
    //   res.status(400).send();
    // }
    console.log(req.query);
    if (req.query) {
        data_1.quotes.push(req.query);
        console.log(data_1.quotes);
        res.status(201).send({ quote: req.query });
    }
    else {
        res.status(400).send();
    }
};
exports.postQuote = postQuote;
//# sourceMappingURL=quotes.controllers.js.map