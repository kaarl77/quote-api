import express from "express";
import {
  getQuotes,
  getRandomQuote,
  postQuote,
} from "../Controllers/quotes.controllers";

export const quotesRouter = express.Router();

quotesRouter.get("/", getQuotes);
quotesRouter.get("/random", getRandomQuote);
quotesRouter.post("/", postQuote);
