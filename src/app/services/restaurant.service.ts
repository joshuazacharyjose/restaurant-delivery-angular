import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Restaurant } from '../models/models';

@Injectable({
    providedIn: 'root'
})
export class RestaurantService {
    private dataUrl = 'data/restaurants.json';

    constructor(private http: HttpClient) { }

    getRestaurants(): Observable<Restaurant[]> {
        return this.http.get<Restaurant[]>(this.dataUrl);
    }

    getRestaurant(id: number) {
        return this.getRestaurants().pipe(
            map(restaurants => restaurants.find(r => r.id === id) ?? null)
        );
    }
}

