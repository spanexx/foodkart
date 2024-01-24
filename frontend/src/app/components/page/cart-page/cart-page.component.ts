import { Component, OnInit } from '@angular/core';
import { Cart } from '../../../shared/models/cart';
import { CartService } from '../../../services/cart.service';
import { CartItem } from '../../../shared/models/cart-item';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [FormsModule, RouterLink, RouterOutlet, CommonModule],
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  cart!: Cart;
  checkoutSuccess: boolean = false;

  constructor(private cartService: CartService) {
    this.cartService.getCartObservable().subscribe((cart) => {
      this.cart = cart;
    });
  }

  ngOnInit(): void {
    // You can perform additional initialization logic here if needed
  }

  removeFromCart(cartItem: CartItem): void {
    this.cartService.removeFromCart(cartItem.food.id);
  }
  clearCart(): void {
    this.cartService.clearCart();
  }

  changeQuantity(cartItem: CartItem, newQuantity: number): void {
    this.cartService.changeQuantity(cartItem.food.id, newQuantity);
  }
  

  checkout(): void {
    // Implement your checkout logic here
    // call an API to process the order, update inventory, etc.

    //simulating a successful checkout
    this.checkoutSuccess = true;

    // Clear the cart after successful checkout
    this.cartService.clearCart();

    // navigate to a confirmation page or display a success message
    // Example: this.router.navigate(['/confirmation']); // Make sure to import the Router service
  }

}
