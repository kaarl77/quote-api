import express from "express";
import {getQuotes} from "../Controllers/quotes.controllers";

export const quotesRouter = express.Router();

quotesRouter.get('/', getQuotes)