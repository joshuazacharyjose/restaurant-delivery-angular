import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { OrderService } from '../../services/order.service';
import { Order, OrderStatus } from '../../models/models';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-order-status',
    standalone: true,
    imports: [
        CommonModule,
        MatCardModule,
        MatProgressBarModule,
        MatStepperModule,
        MatIconModule,
        MatButtonModule
    ],
    templateUrl: './order-status.component.html',
    styleUrl: './order-status.component.css'
})
export class OrderStatusComponent {
    currentOrder$: Observable<Order | null>;
    steps = [
        OrderStatus.Placed,
        OrderStatus.Preparing,
        OrderStatus.OutForDelivery,
        OrderStatus.Delivered
    ];

    constructor(private orderService: OrderService) {
        this.currentOrder$ = this.orderService.currentOrder$;
    }

    getStepIndex(status: string): number {
        return this.steps.indexOf(status as OrderStatus);
    }
}
