import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-berries',
  standalone: true,
  imports: [CommonModule, FormsModule, NgxPaginationModule],
  templateUrl: './berries.component.html',
  styleUrl: './berries.component.scss'
})
export class BerriesComponent implements OnInit {
  berriesList: any[] = [];
  filteredBerriesList: any[] = [];
  searchTerm: string = '';
  sort: boolean = true;
  page: number = 1;
  
  private readonly berryUrl: string = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/berries';

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.getBerries();
  }

  getBerries() {
    this.appService.getBerries().subscribe((response: any) => {
      this.berriesList = response.results;
      this.berriesList.forEach((berry: any) => berry.imgUrl = `${this.berryUrl}/${berry.name}-berry.png`);
      this.filteredBerriesList = this.berriesList
    });
  }

  filterBerries(): void {
    this.filteredBerriesList = this.berriesList
      .filter(item => item.name.toLowerCase().includes(this.searchTerm.toLowerCase()))
      .sort((a, b) => {
        const comparison = a.name.localeCompare(b.name);
        return this.sort ? comparison : -comparison;
      });
  }

  toggleSort(): void {
    this.sort = !this.sort;
    this.filterBerries();
  }
}
