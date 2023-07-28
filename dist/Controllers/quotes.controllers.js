"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getQuotes = void 0;
const data_1 = require("../data");
const getQuotes = (req, res, next) => {
    res.status(200).send(data_1.quotes);
};
exports.getQuotes = getQuotes;
//# sourceMappingURL=quotes.controllers.js.map