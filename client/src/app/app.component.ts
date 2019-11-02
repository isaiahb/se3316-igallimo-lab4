import { Component, OnInit, Input } from '@angular/core';
import { Item } from "./item";
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'client';

  items: Item[];

  getItems(): void {
	  this.items = this.apiService.getItems();
  }

  constructor(private apiService: ApiService) { }

  ngOnInit() {
	  this.getItems();
  }

}
