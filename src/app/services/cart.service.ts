import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MenuItem } from '../models/models';

export interface CartItem extends MenuItem {
    quantity: number;
}

@Injectable({
    providedIn: 'root'
})
export class CartService {
    private cartItems = new BehaviorSubject<CartItem[]>([]);
    cartItems$ = this.cartItems.asObservable();

    constructor() { }

    addToCart(item: MenuItem) {
        const currentItems = this.cartItems.value;
        const existingItem = currentItems.find(i => i.id === item.id);

        if (existingItem) {
            existingItem.quantity += 1;
            this.cartItems.next([...currentItems]);
        } else {
            this.cartItems.next([...currentItems, { ...item, quantity: 1 }]);
        }
    }

    removeFromCart(itemId: number) {
        const currentItems = this.cartItems.value;
        const existingItem = currentItems.find(i => i.id === itemId);

        if (existingItem && existingItem.quantity > 1) {
            existingItem.quantity -= 1;
            this.cartItems.next([...currentItems]);
        } else {
            this.cartItems.next(currentItems.filter(i => i.id !== itemId));
        }
    }

    clearCart() {
        this.cartItems.next([]);
    }

    getTotalAmount(): number {
        return this.cartItems.value.reduce((total, item) => total + (item.price * item.quantity), 0);
    }
}
