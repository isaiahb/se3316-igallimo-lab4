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

	updateItem() {
		if(!this.editingItem) return;
		var item = this.editingItem;
		var json = JSON.stringify({quantity: item.type, loanPeriod: item.loanPeriod});

		this.editingItem = null;

	}
	
	editItem(item: Item) {
		this.editingItem = {name: item.name, type: item.type, id: item.id, loanPeriod: item.loanPeriod, quantity: item.quantity};
	}

	getItems(): void {
		this.items = this.apiService.getItems();
	}

	constructor(private apiService: ApiService) { }

	ngOnInit() {
		this.getItems();
	}

}
