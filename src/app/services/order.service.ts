import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Order, OrderStatus } from '../models/models';

@Injectable({
    providedIn: 'root'
})
export class OrderService {
    private orders: Order[] = [];
    // For demo, we just keep track of the last order placed to show status
    private currentOrderSubject = new BehaviorSubject<Order | null>(null);
    currentOrder$ = this.currentOrderSubject.asObservable();

    constructor() { }

    placeOrder(order: Order): Observable<Order> {
        order.id = Math.floor(Math.random() * 10000);
        order.status = OrderStatus.Placed;
        order.timestamp = new Date();
        this.orders.push(order);
        this.currentOrderSubject.next(order);

        // Simulate order progress
        this.simulateOrderProgress(order);

        return of(order);
    }

    private simulateOrderProgress(order: Order) {
        setTimeout(() => {
            this.updateStatus(order.id, OrderStatus.Preparing);
        }, 5000); // 5 seconds to preparing

        setTimeout(() => {
            this.updateStatus(order.id, OrderStatus.OutForDelivery);
        }, 10000); // 10 seconds to out for delivery

        setTimeout(() => {
            this.updateStatus(order.id, OrderStatus.Delivered);
        }, 15000); // 15 seconds to delivered
    }

    private updateStatus(orderId: number, status: OrderStatus) {
        const order = this.orders.find(o => o.id === orderId);
        if (order) {
            order.status = status;
            this.currentOrderSubject.next({ ...order }); // trigger update
        }
    }
}
