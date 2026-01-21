import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { CartService, CartItem } from '../../services/cart.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-cart',
    standalone: true,
    imports: [
        CommonModule,
        RouterLink,
        MatButtonModule,
        MatIconModule,
        MatCardModule
    ],
    templateUrl: './cart.component.html',
    styleUrl: './cart.component.css'
})
export class CartComponent {
    cartItems$: Observable<CartItem[]>;

    constructor(public cartService: CartService) {
        this.cartItems$ = this.cartService.cartItems$;
    }

    increment(item: CartItem) {
        this.cartService.addToCart(item);
    }

    decrement(item: CartItem) {
        this.cartService.removeFromCart(item.id);
    }
}
