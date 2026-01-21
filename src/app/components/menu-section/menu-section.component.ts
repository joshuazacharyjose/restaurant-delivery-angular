import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Observable, combineLatest, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { MenuItem, Restaurant } from '../../models/models';
import { RestaurantService } from '../../services/restaurant.service';
import { CartService } from '../../services/cart.service';

@Component({
    selector: 'app-menu-section',
    standalone: true,
    imports: [
        CommonModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatSnackBarModule
    ],
    templateUrl: './menu-section.component.html',
    styleUrls: ['./menu-section.component.css']
})
export class MenuSectionComponent implements OnInit {
    items$: Observable<MenuItem[]>;
    category: string = '';

    constructor(
        private route: ActivatedRoute,
        private restaurantService: RestaurantService,
        private cartService: CartService,
        private snackBar: MatSnackBar
    ) {
        this.items$ = of([]);
    }

    ngOnInit() {
        this.items$ = combineLatest([
            this.route.parent!.paramMap,
            this.route.data
        ]).pipe(
            switchMap(([params, data]) => {
                const id = Number(params.get('id'));
                this.category = data['category'];
                return this.restaurantService.getRestaurant(id);
            }),
            map(restaurant => {
                if (!restaurant) return [];
                return restaurant.menu.filter(item => item.category === this.category);
            })
        );
    }

    addToCart(item: MenuItem) {
        this.cartService.addToCart(item);
        this.snackBar.open(`${item.name} added to cart`, 'Close', {
            duration: 3000,
            horizontalPosition: 'end',
            verticalPosition: 'bottom'
        });
    }
}
