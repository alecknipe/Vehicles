import { Vehicle } from '../Vehicle.js';
import { AbleToTow } from '../../interfaces/AbleToTow.js';
import { Car } from './Car';
import { Motorbike } from './Motorbike';

export class Truck extends Vehicle implements AbleToTow {
    towingCapacity: number;

    constructor(make: string, model: string, year: number, towingCapacity: number) {
        super(make, model, year);
        this.towingCapacity = towingCapacity;
    }

    tow(vehicle: Truck | Car | Motorbike): void {
        console.log(`Towing ${vehicle.info()} with a capacity of ${this.towingCapacity} kg.`);
    }

    override  info(): string {
        return `Truck: ${super.info()}, Towing Capacity: ${this.towingCapacity} kg`;
    }
}
