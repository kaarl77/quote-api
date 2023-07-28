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

export const putQuote = (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const { quote, person } = req.query;
  if (typeof quote === "string" && typeof person === "string") {
    console.log("good data");
    const quoteIndex = quotes.findIndex(
      (quote: Quote) => quote.id === parseInt(id)
    );
    if (quoteIndex !== -1) {
      console.log("good index");
      quotes[quoteIndex] = { quote, person, id: +id };
      res.status(200).send({ quote: quotes[quoteIndex] });
    } else {
      console.log("bad index");
      res.status(400).send("Invalid quote id");
    }
  } else {
    console.log("bad data");
    res.status(400).send("Invalid quote format");
  }
};
