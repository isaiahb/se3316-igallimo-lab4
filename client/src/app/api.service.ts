import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from "./item";


export const items: Item[] = [
	{ id: 1, name: 'Dr Nice', type: "book", loanPeriod: 10, quantity: 5 },
	{ id: 2, name: 'Mr Nobody', type: "book", loanPeriod: 100, quantity: 5 },
	{ id: 3, name: 'Dr Not So Nice', type: "cd", loanPeriod: 1, quantity: 2 },
];


@Injectable({providedIn: 'root'})

export class ApiService {
	constructor(private http: HttpClient) { }
	getItems(): Item[] {
		return items;
	}

	//test update function
	updateItem(id: number, json: string): Promise<Boolean> {
		var payload = JSON.parse(json);

		//kinda a bad implementation since it keeps looping even after we found our item
		items.forEach((item)=>{
			if (item.id == id) {
				item.quantity = payload.quantity;
				item.loanPeriod = payload.loanPeriod;
			}
		});

		return new Promise<Boolean>((good, bad)=> {
			setTimeout(good, 2000);
		});
	}
}

