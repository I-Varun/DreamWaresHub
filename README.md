# 🛍️ DreamWaresHub

An advanced, full-featured **e-commerce web application** built with the **MERN stack** (MongoDB, Express.js, React, Node.js). DreamWaresHub offers a seamless shopping experience with secure payments, user-friendly UI, robust admin panel, and essential e-commerce functionalities.

## 🚀 Live Demo

🔗 [Visit the Live Site](https://dreamwareshub.onrender.com/)  
🎥 [Watch Demo Video on YouTube](https://www.youtube.com/watch?v=vCodlmcmRwk)

## 🖼️ Screenshot of the Project

![DreamWaresHub Screenshot](./Screenshot%202024-06-02%20230438.png)

---

## 📂 Features

### 🛒 Customer Features
- 📦 **Product Listings** — Paginated and filterable product list with sorting options.
- 🔍 **Product Details Page** — View full product details with image, description, and price.
- 🛒 **Cart Management** — Add, update, or remove items from the cart.
- 💳 **Checkout** — Complete order using secure card payments or opt for cash on delivery.
- 📧 **Order Confirmation Emails** — Automated emails sent after successful order.
- 🔐 **Authentication** — Secure login and signup using **Passport.js** strategies.
- 👤 **User Profile** — View personal details and order history with visual order status icons.
- 🔁 **Password Reset Emails** — Send reset links via **Nodemailer**.

### 🛠️ Admin Features
- ⚙️ **Admin Dashboard** — Manage users, orders, and products securely.
- 🛠️ **Add / Edit / Delete Products** — Full control over product catalog.
- 📦 **Manage Orders** — Update order status, view user information.
- 📊 **Mongoose Queries** — Implemented sorting, filtering, and pagination with performance in mind.

---

## 🧰 Tech Stack

| Frontend       | Backend        | Database  | Auth       | Email       |
|----------------|----------------|-----------|------------|-------------|
| React, Redux   | Node.js, Express| MongoDB   | Passport.js| Nodemailer  |

---

## 🔐 Authentication

- Local strategy using Passport.js
- JWT for session handling
- Protected routes for Admin and Users

---

# 🚀 Project Setup Guide (Backend + Frontend)

# 1. Clone the Repository
git clone https://github.com/I-Varun/DreamWaresHub.git
cd DreamWaresHub

# ---------------------------
# 🔧 Backend Setup
cd backend

# Install backend dependencies
npm install

# Start the backend server
npm run server

# ---------------------------
# 💻 Frontend Setup
cd ../frontend

# Install frontend dependencies
npm install

# Start the frontend React app
npm start



