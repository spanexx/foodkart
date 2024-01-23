import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { FoodService } from '../../../service/food.service';
import { Food } from '../../../shared/models/Food';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TagsComponent } from '../../partials/tag/tag.component';
import { CartService } from '../../../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-food-page',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink, RouterOutlet, TagsComponent],
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.css'
})
export class FoodPageComponent implements OnInit{
  currentRating: number | null = null;
  food!: Food;
  private activatedRoute: ActivatedRoute;
  private foodService: FoodService;
 
  constructor(activatedRoute: ActivatedRoute, foodService: FoodService,
    private cartService: CartService, private router: Router){
    this.activatedRoute = activatedRoute;
    this.foodService = foodService;
  }


ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params.id)
      this.food = this.foodService.getFoodById(params.id);
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

  addToCart(){
    this.cartService.addToCart(this.food)
    this.router.navigateByUrl('/cart-page')
  }

}
