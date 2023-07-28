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
  console.log(req.query);
  if (req.query) {
    const { quote, person } = req.query;
    if (typeof quote === "string" && typeof person === "string") {
      quotes.push({ quote, person, id: quotes[quotes.length - 1].id + 1 });
      res.status(201).send({ quote: req.query });
    } else {
      res.status(400).send();
    }
  } else {
    res.status(400).send();
  }
};
