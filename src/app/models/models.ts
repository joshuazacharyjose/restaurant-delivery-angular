export interface Restaurant {
    id: number;
    name: string;
    cuisine: string;
    rating: number;
    description: string;
    address: string;
    priceRange: string;
    imageUrl: string;
    deliveryTime: number; // in minutes
    menu: MenuItem[];
}

export interface MenuItem {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    isVegetarian: boolean;
    category: string;
}

export interface Order {
    id: number;
    userId: number;
    restaurantId: number;
    items: { menuItemId: number; quantity: number }[];
    totalAmount: number;
    status: OrderStatus;
    timestamp: Date;
}

export interface User {
    id: number;
    name: string;
    email: string;
    address: string;
}

export enum OrderStatus {
    Placed = 'Placed',
    Preparing = 'Preparing',
    OutForDelivery = 'OutForDelivery',
    Delivered = 'Delivered',
    Cancelled = 'Cancelled'
}
