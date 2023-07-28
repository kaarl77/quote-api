"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.quotesRouter = void 0;
const express_1 = __importDefault(require("express"));
const quotes_controllers_1 = require("../Controllers/quotes.controllers");
exports.quotesRouter = express_1.default.Router();
exports.quotesRouter.get("/", quotes_controllers_1.getQuotes);
exports.quotesRouter.get("/random", quotes_controllers_1.getRandomQuote);
//# sourceMappingURL=quotes.router.js.map
