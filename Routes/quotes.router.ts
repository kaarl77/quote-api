import express from "express";
import {getQuotes, getRandomQuote} from "../Controllers/quotes.controllers";

export const quotesRouter = express.Router();

quotesRouter.get('/', getQuotes)
quotesRouter.get('/random', getRandomQuote)