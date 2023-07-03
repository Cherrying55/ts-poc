import { json } from "express";
import express from "express";
import { Request, Response } from "express";
import httpStatus from "http-status"
import { Router } from "express";
import { recipeRouter } from "./routes/recipes.router";


const app = express();
app.use(json());

app.use(recipeRouter);

app.get("/health", (req: Request, res: Response) => {
    res.sendStatus(httpStatus.OK);
})


const port:number = parseInt(process.env.PORT) || 5000;
app.listen(port, () => {console.log("Listening")});

