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
    console.log(req.query);
    if (req.query) {
        const { quote, person } = req.query;
        if (typeof quote === "string" && typeof person === "string") {
            data_1.quotes.push({ quote, person, id: data_1.quotes[data_1.quotes.length - 1].id + 1 });
            res.status(201).send({ quote: req.query });
        }
        else {
            res.status(400).send();
        }
    }
    else {
        res.status(400).send();
    }
};
exports.postQuote = postQuote;
//# sourceMappingURL=quotes.controllers.js.map