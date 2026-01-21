import { Routes } from '@angular/router';
import { RestaurantListComponent } from './components/restaurant-list/restaurant-list.component';
import { MenuListComponent } from './components/menu-list/menu-list.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { OrderStatusComponent } from './components/order-status/order-status.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { MenuSectionComponent } from './components/menu-section/menu-section.component';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
    { path: '', component: RestaurantListComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    {
        path: 'restaurant/:id',
        component: MenuListComponent,
        children: [
            { path: '', redirectTo: 'starters', pathMatch: 'full' },
            { path: 'starters', component: MenuSectionComponent, data: { category: 'Starters' } },
            { path: 'mains', component: MenuSectionComponent, data: { category: 'Main Course' } },
            { path: 'desserts', component: MenuSectionComponent, data: { category: 'Desserts' } }
        ]
    },
    {
        path: 'cart',
        component: CartComponent,
        canActivate: [authGuard]
    },
    {
        path: 'checkout',
        component: CheckoutComponent,
        canActivate: [authGuard]
    },
    {
        path: 'order-status',
        component: OrderStatusComponent,
        canActivate: [authGuard]
    },
    { path: '**', redirectTo: '' }
];
