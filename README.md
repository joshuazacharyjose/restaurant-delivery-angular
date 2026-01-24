<div align="center">
  <img src="https://angular.io/assets/images/logos/angular/angular.png" alt="Logo" width="80" height="80">

  <h1 align="center">Restaurant Delivery Angular</h1>

  <p align="center">
    A robust food delivery platform featuring multi-restaurant browsing, real-time cart management, and order tracking.
    <br />
    <a href="https://restaurant-delivery-angular.vercel.app/">View Demo</a>
  </p>
</div>

<div align="center">
  <img src="https://img.shields.io/badge/Angular-17%2B-DD0031?style=for-the-badge&logo=angular&logoColor=white" alt="Angular" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Architecture-Standalone-success?style=for-the-badge&logo=angular&logoColor=white" alt="Architecture" />
</div>

<br />

## 📋 Table of Contents
- [About The Project](#about-the-project)
- [Key Features](#key-features)
- [Project Structure](#project-structure)
- [Built With](#built-with)
- [Getting Started](#getting-started)
- [Screenshots](#screenshots)
- [License](#license)

## 🍕 About The Project

**Restaurant Delivery Angular** is a comprehensive Single Page Application (SPA) that simulates a real-world food ordering ecosystem. Unlike simple todo-apps, this project handles complex data flows between listing restaurants, selecting menu items, managing a shopping cart state, and tracking order statuses.

It is built using **Angular Standalone Components**, creating a modular and modern codebase without the complexity of `NgModules`.

## ✨ Key Features

* **🏢 Restaurant Discovery:** Browse a dynamic list of available restaurants via the `restaurant-list` component.
* **📜 Dynamic Menus:** View dedicated menus for specific restaurants.
* **🛒 Reactive Cart System:** centralized state management via `cart.service.ts` allows users to add/remove items seamlessly.
* **🚚 Order Tracking:** Monitor the status of active orders via the `order-status` dashboard.
* **💳 Checkout Flow:** A streamlined checkout process handling user details and summary.

## 📂 Project Structure

A high-level overview of the application's architecture:

```text
src
└── app
    ├── components
    │   ├── cart            # Manages cart UI and item display
    │   ├── checkout        # Final order review and submission
    │   ├── menu-list       # Displays food items for a selected restaurant
    │   ├── navbar          # Global navigation and cart counter
    │   ├── order-status    # Visual tracker for current order progress
    │   └── restaurant-list # Landing page displaying available venues
    ├── models
    │   └── models.ts       # TypeScript interfaces (CartItem, Product, etc.)
    ├── services
    │   ├── cart.service.ts       # RxJS logic for cart state
    │   ├── order.service.ts      # Handles order placement and history
    │   └── restaurant.service.ts # Fetches restaurant/menu data
    ├── app.config.ts       # Application-wide configuration
    └── app.routes.ts       # Router definitions
```

## 🛠 Built With

* **Frontend:** [Angular 17+](https://angular.io/)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Styling:** [SCSS / Tailwind CSS / Bootstrap] *(Update this based on your repo)*
* **Icons:** [FontAwesome / Material Icons]

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

* Node.js (v18.x or higher)
* Angular CLI (`npm install -g @angular/cli`)

### Installation

1.  **Clone the repo**
    ```sh
    git clone https://github.com/joshuazacharyjose/restaurant-delivery-angular.git
    ```
2.  **Navigate to the project folder**
    ```sh
    cd restaurant-delivery-angular
    ```
3.  **Install dependencies**
    ```sh
    npm install
    ```
4.  **Run the development server**
    ```sh
    ng serve
    ```
5.  **View in browser**
    Open `http://localhost:4200/`

## 📸 Screenshots

| Home Page | Menu View |
|:---:|:---:|
| <img src="https://i.ibb.co/WvZWdc15/Screenshot-2026-01-24-052230.png" alt="Screenshot-2026-01-24-052230" border="0"> | <img src="https://i.ibb.co/0VpQgyyR/Screenshot-2026-01-24-052247.png" alt="Screenshot-2026-01-24-052247" border="0"> |

| Cart | Checkout |
|:---:|:---:|
| <img src="https://i.ibb.co/cSst76hX/Screenshot-2026-01-24-052410.png" alt="Screenshot-2026-01-24-052410" border="0"> | <img src="https://i.ibb.co/6R4f4fHd/Screenshot-2026-01-24-052517.png" alt="Screenshot-2026-01-24-052517" border="0"> |

## 🛣 Roadmap

- [ ] Add Payment Gateway integration (Stripe/PayPal)
- [ ] Implement Dark Mode
- [ ] Add Admin Dashboard for managing dishes

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

<p align="center">
  Made with passion by <a href="https://github.com/joshuazacharyjose">Joshua Zachary Jose</a> and team
</p>
