import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-berries',
  standalone: true,
  imports: [],
  templateUrl: './berries.component.html',
  styleUrl: './berries.component.scss'
})
export class BerriesComponent implements OnInit {
  berriesList: any[] = [];
  
  private readonly berryUrl: string = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/berries';

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.getBerries();
  }

  getBerries() {
    this.appService.getBerries().subscribe((response: any) => {
      this.berriesList = response.results;
      this.berriesList.forEach((berry: any) => berry.imgUrl = `${this.berryUrl}/${berry.name}-berry.png`);
    });
  }
}
