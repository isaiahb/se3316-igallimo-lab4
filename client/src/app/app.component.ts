import { Component, OnInit, Input } from '@angular/core';
import { Item } from "./item";
import { ApiService } from './api.service';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
	title = 'client';
	editingItem: Item;
	items: Item[];

	editLoanPeriod: number;
	editQuantity: number;

	updateItem() {
		if(!this.editingItem) return console.log("no item selected to update");
		var item = {quantity: this.editQuantity, loanPeriod: this.editLoanPeriod}

		var json = JSON.stringify({quantity: item.quantity, loanPeriod: item.loanPeriod});
		console.log("updateing " + this.editingItem.name);
		console.log(json);
		this.apiService.updateItem(this.editingItem.id, json).then(()=>{
			this.getItems();
			console.log("updated!!");
		});
		this.editingItem = null;
	}

	editItem(item: Item) {
		this.editingItem = item;//{name: item.name, type: item.type, id: item.id, loanPeriod: item.loanPeriod, quantity: item.quantity};

		this.editLoanPeriod = this.editingItem.loanPeriod
		this.editQuantity = this.editingItem.quantity

		console.log("editing item");
		console.log(this.editingItem);
	}

	getItems(): void {
		this.items = this.apiService.getItems();
	}

	constructor(private apiService: ApiService) { }

	ngOnInit() {
		this.getItems();
	}

}
