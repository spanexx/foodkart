import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomeComponent } from '../../page/home/home.component';
import { Router } from '@angular/router';
import { CartService } from '../../../services/cart.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CartInfoComponent } from '../cart-info/cart-info.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterOutlet, HomeComponent, 
    FormsModule, CommonModule, CartInfoComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  cartQuantity=0 ;
  constructor(private router: Router, cartService: CartService){
    cartService.getCartObservable().subscribe(data =>{
      this.cartQuantity = data.totalCount;
    })
  }

  goHome(){
    this.router.navigateByUrl('/home')
  }
}
