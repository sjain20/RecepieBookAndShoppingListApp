import { Ingredients } from "../shared/ingredients.model";

export class Recepie{
    constructor(public name:string,public description:string,public img:string, public ingredients:Ingredients[]){
    }
}