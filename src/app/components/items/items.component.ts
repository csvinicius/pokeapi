import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [],
  templateUrl: './items.component.html',
  styleUrl: './items.component.scss'
})
export class ItemsComponent implements OnInit {
  itemsList: any[] = [];
  private readonly itemUrl: string = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items';

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.getItems();
  }

  getItems() {
    this.appService.getItems().subscribe((response: any) => {
      this.itemsList = response.results;
      this.itemsList.forEach((item: any) => item.imgUrl = `${this.itemUrl}/${item.name}.png`);
    });
  }
}
