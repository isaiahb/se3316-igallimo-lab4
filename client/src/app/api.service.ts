import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from "./item";


export const items: Item[] = [
	{ id: 11, name: 'Dr Nice', type: "book", loanPeriod: 10, quantity: 5 },
	{ id: 11, name: 'Mr Nobody', type: "book", loanPeriod: 100, quantity: 5 },
	{ id: 11, name: 'Dr Not So Nice', type: "cd", loanPeriod: 1, quantity: 2 },
];


@Injectable({providedIn: 'root'})

export class ApiService {
	constructor(private http: HttpClient) { }
	getItems(): Item[] {
		return items;
	}
}

