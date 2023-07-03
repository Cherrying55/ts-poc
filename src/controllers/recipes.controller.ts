import { Request, Response } from "express";
import httpStatus from "http-status";
import { Recipe } from "../protocols/recipes.protocol";
import { getRecipes as get, createRecipe as create, deleteRecipe as deleter, updateRecipe as update } from "../services/recipes.services";

export async function createRecipe(req: Request, res: Response){
    const rec = req.body as Recipe;
    create(rec);
    res.sendStatus(httpStatus.OK);
}

export async function getRecipes(req: Request, res: Response){
    const all = await get();
    res.send(all);
}

export async function deleteRecipe(req: Request, res: Response){
    const id:number = parseInt(req.params.id);
    try{
        deleter(id);
        return res.sendStatus(200);
    }
    catch{

    }
}
export async function updateRecipe(req: Request, res: Response){
    const id:number = parseInt(req.params.id);
    const rec = req.body as Recipe;
    try{
        update(rec, id);
        return res.sendStatus(200);
    }
    catch{
        
    }
}