import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { RestaurantService } from '../../services/restaurant.service';
import { Restaurant } from '../../models/models';
import { Observable } from 'rxjs';

import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../../pipes/filter.pipe';
import { HighlightDirective } from '../../directives/highlight.directive';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
    selector: 'app-restaurant-list',
    standalone: true,
    imports: [
        CommonModule,
        RouterLink,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatChipsModule,
        FormsModule,
        FilterPipe,
        HighlightDirective,
        MatFormFieldModule,
        MatInputModule
    ],
    templateUrl: './restaurant-list.component.html',
    styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent {
    restaurants$!: Observable<Restaurant[]>;
    searchText: string = '';

    constructor(private restaurantService: RestaurantService) {
        this.restaurants$ = this.restaurantService.getRestaurants();
    }
}