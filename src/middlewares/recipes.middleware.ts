import { Request, Response } from "express";
import { Recipe } from "../protocols/recipes.protocol";
import recipeschema from "../schemas/recipes.schema";

export function validateRecipe(req: Request, res: Response, next){
    const corpo = req.body as Recipe;
    const validation = recipeschema.validate(corpo);

    if (validation.error) {
      return res.sendStatus(422);
    }
  
    next();
}