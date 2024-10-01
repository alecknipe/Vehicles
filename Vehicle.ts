
export class Vehicle {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
  }

  info(): string {
      return `${this.year} ${this.make} ${this.model}`;
  }
}
