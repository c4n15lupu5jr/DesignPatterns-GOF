import { MealCompositeProtocol } from "../../singleton/interfaces/meal-composite-protocol";

export abstract class AbstractMeal implements MealCompositeProtocol {
    constructor(private name: string, private price: number) {}

    getPrice(): number {
        return this.price;
    }
}
