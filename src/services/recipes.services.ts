import { Recipe } from "protocols/recipes.protocol";
import db from "../db";

//const recipes:Recipe[] = [];

export async function createRecipe(recipe: Recipe){
    //recipes.push(recipe);
    const {name, ingredients, steps,cost} = recipe;
    try{
        await db.query(
            `
            INSERT INTO recipes (name, ingredients, steps, cost) VALUES ($1, $2, $3, $4)
            `, [name, ingredients, steps, cost]
        )
        ;
    }
    catch{
     console.log("erro")
    }
}

export async function getRecipes(){
    const users = await db.query<Recipe>(`SELECT * FROM recipes`);
    console.log(typeof users.rows);
    return users.rows;
    
}

export async function deleteRecipe(id: number){
    try{
        const query = await db.query(
            `DELETE FROM recipes WHERE id=$1`
        , [id]);
        
    }
    catch{

    }
}

export async function updateRecipe(recipe: Recipe, id: number){

    const {name, ingredients, steps,cost} = recipe;
    try{
        const update = await db.query(
            `
            
          UPDATE recipes
          SET name = $1, ingredients = $2, steps = $3, cost= $4
          WHERE id=$5;
            `, [name, ingredients, steps, cost, id]
        );
        
    }
    catch{

    }
}