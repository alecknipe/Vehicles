// src/interfaces/AbleToTow.ts
import { Truck } from '../classes/Vehicles/Truck.js'
import { Car } from '../classes/Vehicles/Car.js';
import { Motorbike } from '../classes/Vehicles/Motorbike.js';

// Define the interface
export interface AbleToTow {
    towingCapacity: number;
    tow(vehicle: Truck | Car | Motorbike): void;
}
