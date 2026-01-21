import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule, RouterLink, RouterLinkActive } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { switchMap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Restaurant } from '../../models/models';
import { RestaurantService } from '../../services/restaurant.service';

@Component({
    selector: 'app-menu-list',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        MatButtonModule,
        MatIconModule,
        MatSnackBarModule,
        MatProgressSpinnerModule,
        MatTabsModule
    ],
    templateUrl: './menu-list.component.html',
    styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent {
    restaurant$: Observable<Restaurant | null>;
    navLinks = [
        { path: 'starters', label: 'Starters' },
        { path: 'mains', label: 'Main Course' },
        { path: 'desserts', label: 'Desserts' }
    ];

    constructor(
        route: ActivatedRoute,
        restaurantService: RestaurantService
    ) {
        this.restaurant$ = route.paramMap.pipe(
            map(params => Number(params.get('id'))),
            switchMap(id => restaurantService.getRestaurant(id))
        );
    }
}
