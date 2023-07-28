import { NextFunction } from "express";
import { Request } from "express";
import { Response } from "express";
import { Quote, quotes } from "../data";

export const getQuotes = (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({ quotes: quotes });
};

export const getRandomQuote = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const index = Math.floor(Math.random() * quotes.length);
  res.status(200).send({ quote: quotes[index] });
};

export const postQuote = (req: Request, res: Response, next: NextFunction) => {
  // const { quote, person } = req.query;
  // if (quote && person) {
  // quotes.push({ quote, person });
  // res.status(201).send({ quote: { quote, person } });
  // } else {
  //   res.status(400).send();
  // }
  console.log(req.query);
  if (req.query) {
    quotes.push(req.query as Quote);
    console.log(quotes);
    res.status(201).send({ quote: req.query });
  } else {
    res.status(400).send();
  }
};
