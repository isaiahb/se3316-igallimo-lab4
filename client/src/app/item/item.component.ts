import { Component, OnInit } from '@angular/core';
import { Item } from "../item";

@Component({
	selector: 'app-item',
	templateUrl: './item.component.html',
	styleUrls: ['./item.component.scss']
})

export class ItemComponent implements OnInit {
	name = 'the cool book';
	id = '9001';
	loanPeriod = 10;
	type = 'book';

	// constructor(private heroService: HeroService) { }

	// constructor(id, name, loanPeriod, type) { 
	// 	this.id = id;
	// 	this.name = name;
	// 	this.loanPeriod = loanPeriod;
	// 	this.type = type;
	// }

	ngOnInit() {}
}
