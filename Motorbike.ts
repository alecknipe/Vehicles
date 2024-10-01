import { Vehicle } from '../Vehicle.js';

export class Motorbike extends Vehicle {
    constructor(make: string, model: string, year: number) {
        super(make, model, year);
    }

    override info(): string {
        return `Motorbike: ${super.info()}`;
    }
}
