import * as readline from 'readline';
import { Car } from './classes/Vehicles/Car.js';
import { Truck } from './classes/Vehicles/Truck.js';
import { Motorbike } from './classes/Vehicles/Motorbike.js';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// List of vehicles
let vehicles: (Car | Truck | Motorbike)[] = [];

// Helper function to prompt the user
const promptUser = async (question: string): Promise<string> => {
    return new Promise(resolve => rl.question(question, resolve));
};

// Create a new vehicle
const createVehicle = async () => {
    const type = await promptUser('Enter vehicle type (car, truck, motorbike): ');
    const make = await promptUser('Enter make: ');
    const model = await promptUser('Enter model: ');
    const year = parseInt(await promptUser('Enter year: '), 10);

    let vehicle: Car | Truck | Motorbike;

    switch (type.toLowerCase()) {
        case 'car':
            vehicle = new Car(make, model, year);
            break;
        case 'truck':
            const towingCapacity = parseInt(await promptUser('Enter towing capacity (kg): '), 10);
            vehicle = new Truck(make, model, year, towingCapacity);
            break;
        case 'motorbike':
            vehicle = new Motorbike(make, model, year);
            break;
        default:
            console.log('Invalid vehicle type.');
            return;
    }

    vehicles.push(vehicle);
    console.log(`${type} created: ${vehicle.info()}`);
};

// Select a vehicle
const selectVehicle = async () => {
    if (vehicles.length === 0) {
        console.log('No vehicles available.');
        return;
    }

    console.log('Available vehicles:');
    vehicles.forEach((vehicle, index) => {
        console.log(`${index}: ${vehicle.info()}`);
    });

    const index = parseInt(await promptUser('Select a vehicle by number: '), 10);
    const selectedVehicle = vehicles[index];

    if (!selectedVehicle) {
        console.log('Invalid selection.');
        return;
    }

    await performAction(selectedVehicle);
};

// Perform an action with a selected vehicle
const performAction = async (vehicle: Car | Truck | Motorbike) => {
    const action = await promptUser('Choose an action (info, tow, exit): ');

    switch (action.toLowerCase()) {
        case 'info':
            console.log(vehicle.info());
            break;
        case 'tow':
            if (vehicle instanceof Truck) {
                const targetIndex = parseInt(await promptUser('Select a vehicle to tow by number: '), 10);
                const targetVehicle = vehicles[targetIndex];
                if (targetVehicle) {
                    vehicle.tow(targetVehicle);
                } else {
                    console.log('Invalid vehicle to tow.');
                }
            } else {
                console.log('This vehicle cannot tow.');
            }
            break;
        case 'exit':
            rl.close();
            break;
        default:
            console.log('Invalid action.');
    }
};

// Main function
const main = async () => {
    while (true) {
        const action = await promptUser('Do you want to create a vehicle or select an existing one? (create/select/exit): ');
        
        if (action.toLowerCase() === 'create') {
            await createVehicle();
        } else if (action.toLowerCase() === 'select') {
            await selectVehicle();
        } else if (action.toLowerCase() === 'exit') {
            rl.close();
            break;
        } else {
            console.log('Invalid option.');
        }
    }
};

// Run the main menu
main();
