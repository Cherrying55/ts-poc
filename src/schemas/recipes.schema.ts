import joi from "joi";
import { Recipe } from "../protocols/recipes.protocol";


const recipeschema = joi.object<Recipe>({
   name: joi.string().required(),
   ingredients: joi.string().required(),
   steps: joi.string().required(),
   cost: joi.number().required()
})

export default recipeschema;