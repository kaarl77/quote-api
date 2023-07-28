"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.putQuote = exports.postQuote = exports.getRandomQuote = exports.getQuotes = void 0;
const data_1 = require("../data");
const getQuotes = (req, res, next) => {
    console.log(req.query);
    if (req.query.person) {
        const filteredQuotes = data_1.quotes.filter((quote) => quote.person === req.query.person);
        res.status(200).send({ quotes: filteredQuotes });
    }
    else {
        res.status(200).send({ quotes: data_1.quotes });
    }
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
const putQuote = (req, res, next) => {
    const { id } = req.params;
    const { quote, person } = req.query;
    if (typeof quote === "string" && typeof person === "string") {
        console.log("good data");
        const quoteIndex = data_1.quotes.findIndex((quote) => quote.id === parseInt(id));
        if (quoteIndex !== -1) {
            console.log("good index");
            data_1.quotes[quoteIndex] = { quote, person, id: +id };
            res.status(200).send({ quote: data_1.quotes[quoteIndex] });
        }
        else {
            console.log("bad index");
            res.status(400).send("Invalid quote id");
        }
    }
    else {
        console.log("bad data");
        res.status(400).send("Invalid quote format");
    }
};
exports.putQuote = putQuote;
//# sourceMappingURL=quotes.controllers.js.map