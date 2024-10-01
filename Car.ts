// src/vehicles/Car.ts
import { Vehicle } from '../Vehicle.js';

export class Car extends Vehicle {
    constructor(make: string, model: string, year: number) {
        super(make, model, year);
    }

    override info(): string {
        return `Car: ${super.info()}`;
    }
}
