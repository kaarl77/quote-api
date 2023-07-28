import express from "express";
import { quotesRouter } from "./Routes/quotes.router";

const app = express();

const PORT = process.env.PORT || 4001;

app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

const rootRouter = express.Router();
app.use("/api", rootRouter);

rootRouter.use("/quotes", quotesRouter);
