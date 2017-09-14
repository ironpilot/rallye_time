import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Car} from '../models/car.model';

@Injectable()
export class CarService {
	constructor(private http: Http) {}

	addCar(car: Car) {
		return this.http.post('http://localhost/api/car', car);
	}
}
