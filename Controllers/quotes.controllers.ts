import { NextFunction } from "express";
import { Request } from "express";
import { Response } from "express";
import { quotes } from "../data";

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
