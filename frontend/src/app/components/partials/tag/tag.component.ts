import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FoodService } from '../../../service/food.service';
import { Tag } from '../../../shared/models/Tag';
import { Food } from '../../../shared/models/Food';

@Component({
  selector: 'app-tag',
  standalone: true,
  imports: [FormsModule, RouterLink, RouterOutlet, CommonModule],
  templateUrl: './tag.component.html',
  styleUrl: './tag.component.css'
})
export class TagsComponent implements OnInit {
  @Input() foodPageTags?: string[];
  @Input() justifyContent: string = 'center';
  tags?: Tag[];
  selectedTag?: string;
  filteredFoods: Food[] = [];

  constructor(private foodService: FoodService) {}

  ngOnInit(): void {
    if (!this.foodPageTags) {
      this.tags = this.foodService.getAllTags();
    }
  }

  filterByTag(tag: string): void {
    this.selectedTag = tag;
    this.filteredFoods = this.foodService.getAllFoodsByTag(tag);
  }
}