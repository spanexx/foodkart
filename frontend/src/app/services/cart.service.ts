import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/cart';
import { BehaviorSubject, Observable } from 'rxjs';
import { Food } from '../shared/models/Food';
import { CartItem } from '../shared/models/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Cart = this.getCartFromLocalStorage();
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart);

  constructor() { }

  addToCart(food: Food): void {
    let cartItem = this.cart.items.find(item => item.food.id === food.id);
    if (!cartItem) {
      this.cart.items.push(new CartItem(food));
      this.setCartToLocalStorage();
    }
  }

  removeFromCart(foodId: string): void {
    this.cart.items = this.cart.items.filter(item => item.food.id !== foodId);
    this.setCartToLocalStorage();
  }

  changeQuantity(foodId: string, quantity: number): void {
    let cartItem = this.cart.items.find(item => item.food.id === foodId);

    if (!cartItem) return;

    cartItem.quantity = quantity;
    cartItem.price = quantity * cartItem?.food.price;

    this.setCartToLocalStorage();
  }

  clearCart(): void {
    this.cart = new Cart();
    this.setCartToLocalStorage();
  }

  getCartObservable(): Observable<Cart> {
    return this.cartSubject.asObservable();
  }

  private setCartToLocalStorage(): void {
    if (typeof localStorage !== 'undefined') {
        this.cart.totalPrice = this.cart.items
            .reduce((prevSum, currentItem) => prevSum + currentItem.food.price * currentItem.quantity, 0);

        this.cart.totalCount = this.cart.items
            .reduce((prevSum, currentItem) => prevSum + currentItem.quantity, 0);

        const cartJSON = JSON.stringify(this.cart);
        localStorage.setItem('cart', cartJSON);
        this.cartSubject.next(this.cart);
    }
}

private getCartFromLocalStorage(): Cart {
    if (typeof localStorage !== 'undefined') {
        const cartJSON = localStorage.getItem('cart');
        return cartJSON ? JSON.parse(cartJSON) : new Cart();
    } else {
        // If localStorage is not available, return a default empty cart
        return new Cart();
    }
}
}