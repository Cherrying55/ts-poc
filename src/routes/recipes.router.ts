import { Router } from "express";
import { validateRecipe } from "../middlewares/recipes.middleware";
import { getRecipes, createRecipe, deleteRecipe, updateRecipe } from "../controllers/recipes.controller";

export const recipeRouter = Router();

recipeRouter.get("/recipes", getRecipes)
recipeRouter.post("/recipes", validateRecipe, createRecipe)
recipeRouter.delete("/recipes/:id", deleteRecipe);
recipeRouter.put("/recipes/:id", validateRecipe, updateRecipe);

