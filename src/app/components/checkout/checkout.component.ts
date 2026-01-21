import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CartService } from '../../services/cart.service';
import { OrderService } from '../../services/order.service';
import { Order } from '../../models/models';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
    selector: 'app-checkout',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatInputModule,
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatIconModule,
        MatDialogModule
    ],
    templateUrl: './checkout.component.html',
    styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
    checkoutForm: FormGroup;

    constructor(
        private fb: FormBuilder,
        public cartService: CartService,
        private orderService: OrderService,
        private router: Router,
        private dialog: MatDialog
    ) {
        this.checkoutForm = this.fb.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            address: ['', Validators.required],
            cardNumber: ['', [Validators.required, Validators.pattern('^[0-9]{16}$')]],
            expiryDate: ['', [Validators.required, Validators.pattern('^(0[1-9]|1[0-2])\/[0-9]{2}$')]],
            cvv: ['', [Validators.required, Validators.pattern('^[0-9]{3,4}$')]]
        });
    }

    onSubmit() {
        if (this.checkoutForm.valid) {
            const total = this.cartService.getTotalAmount();

            const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
                width: '350px',
                data: { total }
            });

            dialogRef.afterClosed().subscribe(result => {
                if (result) {
                    this.processOrder(total);
                }
            });
        }
    }

    private processOrder(total: number) {
        let items: any[] = [];
        this.cartService.cartItems$.subscribe(cart => {
            items = cart.map(i => ({ menuItemId: i.id, quantity: i.quantity }));
        }).unsubscribe();

        if (items.length === 0) return;

        const order: Order = {
            id: 0,
            userId: 1,
            restaurantId: 1,
            items: items,
            totalAmount: total,
            status: 'Placed' as any,
            timestamp: new Date()
        };

        this.orderService.placeOrder(order).subscribe(() => {
            this.cartService.clearCart();
            this.router.navigate(['/order-status']);
        });
    }
}
