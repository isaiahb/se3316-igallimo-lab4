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
}
