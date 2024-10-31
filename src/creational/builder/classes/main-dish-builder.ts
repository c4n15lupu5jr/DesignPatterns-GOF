import { MealBuilderProtocol } from "../../singleton/interfaces/meal-builder-protocol";
import { MealBox } from './meal-box';
import { Beans, Beverage, Dessert, Meat, Rice } from "./meals";

export class MainDishBuilder implements MealBuilderProtocol {
    reset() {
        throw new Error("Method not implemented.");
    }
    getPrice(): any {
        throw new Error("Method not implemented.");
    }
    private _meal: MealBox = new MealBox();

    makeMeal(): this {
        const rice = new Rice('Arroz', 5);
        const beans = new Beans('Feijão', 10);
        const meat = new Meat('Carne', 20);
        this._meal.add(rice, beans, meat);
        return this;
    }

    makeBeverage(): this {
        const beverage = new Beverage('Bebida', 7);
        this._meal.add(beverage);
        return this;
    }

    makeDessert(): this {
        const dessert = new Dessert('Sobremesa', 10);
        this._meal.add(dessert);
        return this;
    }

    getMeal(): MealBox {
        return this._meal;
    }
}