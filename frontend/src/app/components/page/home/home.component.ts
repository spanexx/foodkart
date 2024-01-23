import { Component, OnInit } from '@angular/core';
import { Food } from '../../../shared/models/Food';
import { FoodService } from '../../../service/food.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RatingModule, StarRatingComponent } from 'ng-starrating';
import { RatingComponent } from 'ng-starrating/lib/rating.component';
import { SearchComponent } from '../../partials/search/search.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, RouterLink, 
            CommonModule, RouterOutlet, SearchComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentRating: number | null = null;
  foods:Food[] = [];
  constructor(private foodService: FoodService, private activatedRoute: ActivatedRoute){
    
  }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params.searchTerm) {
        this.foods = this.foodService.getFoodBySearchTerm(params.searchTerm);
      } else {
        this.foods = this.foodService.getAll();
      }
    });
  }

  rate(rating: number): void {
    // Your existing rating logic
    // for (let i = 1; i <= 5; i++) {
    //   let star = document.getElementById('star' + i);
    //   star!.classList.remove('selected');
    // }
    // for (let i = 1; i <= rating; i++) {
    //   let star = document.getElementById('star' + i);
    //   star!.classList.add('selected');
    // }
    this.currentRating = rating;
  }

  isStarChecked(starNumber: number): boolean {
    return this.currentRating !== null && starNumber <= this.currentRating;
  }
  }
