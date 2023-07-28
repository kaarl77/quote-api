"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const quotes_router_1 = require("./Routes/quotes.router");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 4001;
app.use(express_1.default.static("public"));
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
const rootRouter = express_1.default.Router();
app.use("/api", rootRouter);
rootRouter.use("/quotes", quotes_router_1.quotesRouter);
//# sourceMappingURL=server.js.map