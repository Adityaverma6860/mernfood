
Description:
The MERN Stack Food Delivery Application is a comprehensive platform designed to offer seamless online food ordering and delivery experiences. Built using MongoDB, Express.js, React.js, and Node.js, the application supports a user-friendly interface for customers, efficient order management for restaurants, and real-time delivery tracking.
  Pakages
  
 in Frontend:
 
  a.npx create-react-app .,
 b.npm i react-router-dom
 
 in Backend :
 
a. npm install express ,
 b.npm install mongoose,
  c.npm i dotenv,
  d.npm install bcryptjs jsonwebtoken
  
Features

1. User Authentication and Profile Management
User Registration/Login:
Users can register and log in securely using JWT (JSON Web Token) authentication.
Passwords are hashed using bcrypt for secure storage.
Profile Management:
Users can update their profile, including name, contact details, and address.
Saved addresses for quick checkout.
2. Restaurant Listings
Explore Restaurants:
Users can browse a list of available restaurants in their location.
Filter options for cuisine type, ratings, and price range.
Restaurant Menu:
Each restaurant has a detailed menu with food items, prices, and images.
3. Food Ordering
Add to Cart:
Users can add multiple items to their cart and view the total cost.
Option to customize items (e.g., extra toppings, spice levels).
Checkout:
Users can choose delivery or pickup options.
Integration with online payment gateways (e.g., Stripe, PayPal).
Order Confirmation:
Users receive an order summary and estimated delivery time after checkout.
4. Order Tracking
Real-Time Updates:
Users can track their order status (Order Received, Being Prepared, Out for Delivery, Delivered).
Live location tracking of the delivery agent using Google Maps API.
5. Admin Panel (Restaurant Dashboard)
Manage Menu:
Restaurant owners can add, update, or remove food items.
Order Management:
Real-time updates on incoming orders.
Option to update the status of each order (e.g., Preparing, Out for Delivery).
Analytics:
View sales reports, popular items, and customer reviews.
6. Delivery Agent Dashboard
Order Assignment:
Delivery agents can view assigned orders and delivery details.
Route Optimization:
Integration with Google Maps for the shortest delivery route.
Delivery Status:
Agents can mark orders as "Picked Up" or "Delivered."
7. Search and Filter
Search for restaurants, dishes, or cuisines.
Filters based on:
Location proximity.
Cuisine type (e.g., Indian, Chinese, Italian).
Price range and customer reviews.
8. Reviews and Ratings
Users can rate restaurants and leave reviews.
Restaurants can respond to reviews for better engagement.
9. Notifications
Real-time notifications for:
Order updates.
Delivery status.
Special offers and discounts.
10. Additional Features
Wishlist:
Users can save favorite items or restaurants for future orders.
Coupons and Discounts:
Integration of promo codes for discounts.
Multi-Language Support:
Localization to support multiple languages.
Technologies Used
Frontend: React.js
React Router for navigation.
Redux for state management.
Bootstrap and CSS for responsive design.
Backend: Node.js and Express.js
RESTful APIs for managing users, orders, and restaurants.
Secure authentication using JWT.
Database: MongoDB
Stores user profiles, restaurant data, menus, and order histories.
Additional Integrations
Stripe/PayPal API for payments.
Google Maps API for location tracking and route optimization.

![What1](https://github.com/user-attachments/assets/2af246d2-2510-4866-88c4-fecd050d0e5c)
![What](https://github.com/user-attachments/assets/4322ad33-9043-40eb-9274-023cac514ca3)


