import { Component, OnInit, Input } from '@angular/core';


@Component({
	selector: 'app-item',
	templateUrl: './item.component.html',
	styleUrls: ['./item.component.scss']
})

export class ItemComponent {
	@Input() name: string;
	@Input() type: string;
	@Input() id: number;
	@Input() loanPeriod: number;
	@Input() quantity: number;

	// items: Item[];
	// getItems(): void {
	// 	this.items = this.apiService.getItems();
	// }

	// constructor(private apiService: ApiService) { }

	// ngOnInit() {
	// 	this.getItems();
	// }
	// constructor(id, name, loanPeriod, type) { 
	// 	this.id = id;
	// 	this.name = name;
	// 	this.loanPeriod = loanPeriod;
	// 	this.type = type;
	// }
}
