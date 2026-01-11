# 🍕 Tomoto — Smart Food Delivery Platform (MERN Stack)

<p align="center">
  <img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">
</p>

<div align="center">
  
  [![Made with MERN](https://img.shields.io/badge/Made%20with-MERN-FF6B35?style=for-the-badge&logo=mongodb)](https://github.com)
  [![Stripe Integration](https://img.shields.io/badge/Payment-Stripe-635BFF?style=for-the-badge&logo=stripe)](https://stripe.com)
  [![JWT Auth](https://img.shields.io/badge/Auth-JWT-000000?style=for-the-badge&logo=jsonwebtokens)](https://jwt.io)
  [![License](https://img.shields.io/badge/License-MIT-FFA500.svg?style=for-the-badge)](LICENSE)
  
  **A scalable, full-stack food delivery web application with secure payments and role-based access**
  
  [Features](#-features) • [Architecture](#-system-architecture) • [Installation](#-installation--setup) • [Tech Stack](#-technology-stack)
</div>

<p align="center">
  <img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">
</p>

## 📌 Overview

**Tomoto** is a production-ready food delivery platform designed to simulate real-world online food ordering systems. Built with the **MERN stack**, it showcases industry-standard architecture, secure payment processing, and clean separation of concerns across three independent modules.

### 🎯 Project Objective

The main objective of Tomoto is to:

- ✅ Provide a smooth food ordering experience for users
- ✅ Enable secure online payments using Stripe
- ✅ Give administrators full control over food items and orders
- ✅ Follow industry-level MERN architecture patterns
- ✅ Demonstrate production-ready code organization

This project was developed to strengthen skills in **full-stack development**, **REST APIs**, **database design**, and **payment gateway integration**.

<p align="center">
  <img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">
</p>

## ✨ Features

### 🛍️ **Customer Features**
- 🔐 User registration and secure login
- 🍔 Browse food items with category filters
- 🛒 Dynamic cart management (add/remove items)
- 💳 Secure checkout with Stripe integration
- 📦 Order placement after successful payment
- 📱 Fully responsive design for all devices
- ⚡ Real-time cart updates
- 🎨 Beautiful UI with smooth animations

### 👨‍💼 **Admin Features**
- 🔑 Secure admin authentication
- ➕ Add new food items with image uploads
- ✏️ Update or delete existing items
- 📋 View all customer orders in real-time
- 🔄 Change order status (Pending → Processing → Delivered)
- 📊 Monitor platform activity
- 🖼️ Image management with Multer
- 📈 Dashboard analytics

### 🔒 **Security Features**
- 🛡️ JWT-based authentication
- 🔐 Protected routes for admin access
- 🔑 Secure password hashing
- 🌐 Environment variable configuration
- ✅ Server-side payment verification
- 🚫 XSS and injection protection

<p align="center">
  <img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">
</p>

## 🧩 Application Modules

### 👥 1. Frontend (User Side)

The frontend is a responsive web interface built using **React** and **Tailwind CSS**, focusing on performance and user experience.

**Key Responsibilities:**
- User registration and login flow
- Display food items with category filters
- Shopping cart management (add/remove items)
- Secure checkout and payment processing
- Order confirmation and receipt
- Responsive design for mobile and desktop

**Technologies:**
```
⚛️  React.js - UI Framework
🎨  Tailwind CSS - Styling
🔌  Axios - HTTP Client
🧭  React Router DOM - Navigation
🍪  Context API - State Management
```

### 🛠️ 2. Admin Panel

The admin panel is a **separate React application** that allows authorized users to manage the entire platform.

**Admin Capabilities:**
- ➕ Add new food items with images
- ✏️ Update existing menu items
- 🗑️ Delete items from catalog
- 📦 View all customer orders
- 🔄 Update order status
- 📊 Monitor platform metrics

**Technologies:**
```
⚛️  React.js - Admin UI
🎨  Tailwind CSS - Styling
🔐  JWT - Authentication
📷  Multer - Image Uploads
🌐  Axios - API Communication
```

### ⚙️ 3. Backend (Server & APIs)

The backend is built using **Node.js** and **Express.js** and acts as the core of the application.

**Backend Responsibilities:**
- 🔐 User authentication using JWT
- 📝 CRUD operations for food items
- 📦 Order management system
- 💳 Stripe payment verification
- 🗄️ Secure MongoDB data storage
- 📤 File upload handling
- 🛡️ API security and validation

**Technologies:**
```
🟢  Node.js - Runtime
🚂  Express.js - Framework
🍃  MongoDB - Database
📦  Mongoose - ODM
🔐  JWT - Authentication
📷  Multer - File Uploads
💳  Stripe - Payments
```

<p align="center">
  <img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">
</p>

## 🧠 System Architecture

```
┌─────────────────────────────────────────────────────────┐
│                     CLIENT LAYER                        │
├─────────────────────┬───────────────────────────────────┤
│   React Frontend    │      React Admin Panel            │
│   (Customer Side)   │      (Management Side)            │
└──────────┬──────────┴───────────────┬───────────────────┘
           │                          │
           │      REST APIs           │
           │                          │
           └──────────┬───────────────┘
                      ↓
           ┌──────────────────────┐
           │   Node.js Backend    │
           │   Express.js Server  │
           └──────────┬───────────┘
                      │
                      ↓
           ┌──────────────────────┐
           │   MongoDB Database   │
           │   (Data Storage)     │
           └──────────────────────┘
                      
           ┌──────────────────────┐
           │  Stripe Payment API  │
           │  (Payment Gateway)   │
           └──────────────────────┘
```

<p align="center">
  <img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">
</p>

## 💻 Technology Stack

### 🎨 Frontend
| Technology | Purpose |
|------------|---------|
| ⚛️ React.js | UI Framework |
| 🎨 Tailwind CSS | Styling & Design |
| 🔌 Axios | HTTP Client |
| 🧭 React Router DOM | Routing |
| 🍪 Context API | State Management |

### 🔧 Backend
| Technology | Purpose |
|------------|---------|
| 🟢 Node.js | Runtime Environment |
| 🚂 Express.js | Web Framework |
| 🍃 MongoDB | NoSQL Database |
| 📦 Mongoose | ODM (Object Data Modeling) |
| 🔐 JWT | Authentication |
| 📷 Multer | File Upload Handling |
| 🔒 bcrypt | Password Hashing |

### 💳 Payment Integration
| Technology | Purpose |
|------------|---------|
| 💳 Stripe API | Secure Payment Processing |
| 🔐 Stripe Checkout | Payment UI |
| ✅ Webhook Integration | Payment Verification |

<p align="center">
  <img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">
</p>

## 🔐 Authentication & Security

### 🛡️ Security Measures Implemented

**1. JWT Authentication**
- Secure token generation on login
- Token verification for protected routes
- Automatic token expiration

**2. Password Security**
- Passwords hashed using bcrypt
- Salt rounds for enhanced security
- No plain text storage

**3. Protected Routes**
- Admin routes require authentication
- Role-based access control
- Middleware validation

**4. Environment Variables**
- API keys stored securely
- Database credentials protected
- No sensitive data in codebase

**5. Payment Security**
- Server-side payment verification
- Stripe webhook integration
- No client-side payment handling

<p align="center">
  <img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">
</p>

## 💳 Stripe Payment Integration

Tomoto integrates **Stripe Checkout** to enable safe and reliable online payments.

### 💰 Payment Flow

```
1. 🛒 User proceeds to checkout
         ↓
2. 🔐 Backend creates Stripe payment session
         ↓
3. 💳 User redirected to Stripe secure checkout
         ↓
4. ✅ Payment processed by Stripe
         ↓
5. 🔔 Webhook confirms payment success
         ↓
6. 📦 Order confirmed and stored in MongoDB
         ↓
7. 🎉 User receives order confirmation
```

### 🔧 Implementation Details

**Frontend:**
```javascript
// Initiate checkout
const handlePayment = async () => {
  const response = await axios.post('/api/payment/create-session', {
    items: cartItems,
    userId: user.id
  });
  
  window.location.href = response.data.url;
};
```

**Backend:**
```javascript
// Create Stripe session
const session = await stripe.checkout.sessions.create({
  payment_method_types: ['card'],
  line_items: items,
  mode: 'payment',
  success_url: `${CLIENT_URL}/success`,
  cancel_url: `${CLIENT_URL}/cancel`,
});
```

<p align="center">
  <img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">
</p>

## 📂 Project Structure

```
Tomoto/
│
├── 📂 frontend/                 # Customer-facing application
│   ├── 📂 src/
│   │   ├── 📂 components/      # React components
│   │   ├── 📂 pages/           # Page components
│   │   ├── 📂 context/         # Context API
│   │   ├── 📂 assets/          # Images & static files
│   │   ├── 📂 utils/           # Helper functions
│   │   └── 📄 App.jsx          # Main app component
│   ├── 📄 package.json
│   └── 📄 .env
│
├── 📂 admin/                    # Admin dashboard
│   ├── 📂 src/
│   │   ├── 📂 components/      # Admin components
│   │   ├── 📂 pages/           # Admin pages
│   │   ├── 📂 context/         # Admin context
│   │   └── 📄 App.jsx
│   ├── 📄 package.json
│   └── 📄 .env
│
├── 📂 backend/                  # APIs & server logic
│   ├── 📂 models/              # Mongoose models
│   │   ├── 📄 User.js
│   │   ├── 📄 Food.js
│   │   └── 📄 Order.js
│   ├── 📂 controllers/         # Business logic
│   │   ├── 📄 authController.js
│   │   ├── 📄 foodController.js
│   │   └── 📄 orderController.js
│   ├── 📂 routes/              # API routes
│   │   ├── 📄 authRoutes.js
│   │   ├── 📄 foodRoutes.js
│   │   └── 📄 orderRoutes.js
│   ├── 📂 middleware/          # Custom middleware
│   │   ├── 📄 auth.js
│   │   └── 📄 upload.js
│   ├── 📂 uploads/             # Uploaded images
│   ├── 📄 server.js            # Entry point
│   ├── 📄 package.json
│   └── 📄 .env
│
└── 📄 README.md
```

<p align="center">
  <img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">
</p>

## ⚙️ Installation & Setup

### 📋 Prerequisites

Before you begin, ensure you have:
- ✅ Node.js (v16 or higher)
- ✅ MongoDB (v5 or higher)
- ✅ Stripe Account (for payment testing)
- ✅ npm or yarn
- ✅ Git

### 🚀 Quick Start

#### 1️⃣ **Clone the Repository**
```bash
git clone https://github.com/your-username/tomoto-food-delivery.git
cd tomoto-food-delivery
```

#### 2️⃣ **Backend Setup**
```bash
cd backend
npm install
```

Create `.env` file in backend directory:
```env
PORT=8000
MONGO_URI=mongodb://localhost:27017/tomoto
JWT_SECRET=your_super_secret_jwt_key_here
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
CLIENT_URL=http://localhost:5173
NODE_ENV=development
```

Start backend server:
```bash
npm start
```

#### 3️⃣ **Frontend Setup**
```bash
cd ../frontend
npm install
```

Create `.env` file in frontend directory:
```env
VITE_API_URL=http://localhost:8000/api
VITE_STRIPE_PUBLIC_KEY=pk_test_your_stripe_public_key
```

Start frontend:
```bash
npm run dev
```

#### 4️⃣ **Admin Panel Setup**
```bash
cd ../admin
npm install
```

Create `.env` file in admin directory:
```env
VITE_API_URL=http://localhost:8000/api
```

Start admin panel:
```bash
npm run dev
```

#### 5️⃣ **Access the Applications**
- 🍕 **Customer Frontend**: `http://localhost:5173`
- 👨‍💼 **Admin Panel**: `http://localhost:5174`
- 🔧 **Backend API**: `http://localhost:8000`

<p align="center">
  <img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">
</p>

## 🔑 Environment Variables

### Backend Configuration

| Variable | Description | Example |
|----------|-------------|---------|
| `PORT` | Server port number | `8000` |
| `MONGO_URI` | MongoDB connection string | `mongodb://localhost:27017/tomoto` |
| `JWT_SECRET` | Secret key for JWT tokens | `your-super-secret-key` |
| `STRIPE_SECRET_KEY` | Stripe secret key | `sk_test_...` |
| `CLIENT_URL` | Frontend URL | `http://localhost:5173` |
| `NODE_ENV` | Environment mode | `development` |

### Frontend Configuration

| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_API_URL` | Backend API URL | `http://localhost:8000/api` |
| `VITE_STRIPE_PUBLIC_KEY` | Stripe publishable key | `pk_test_...` |

### Admin Configuration

| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_API_URL` | Backend API URL | `http://localhost:8000/api` |

<p align="center">
  <img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">
</p>

## 📡 API Endpoints

### 🔐 Authentication
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | User login |

### 🍔 Food Items
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/food` | Get all food items |
| POST | `/api/food/add` | Add new food item (Admin) |
| PUT | `/api/food/update/:id` | Update food item (Admin) |
| DELETE | `/api/food/delete/:id` | Delete food item (Admin) |

### 📦 Orders
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/orders` | Get all orders (Admin) |
| GET | `/api/orders/user/:id` | Get user orders |
| POST | `/api/orders/create` | Create new order |
| PUT | `/api/orders/update/:id` | Update order status (Admin) |

### 💳 Payment
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/payment/create-session` | Create Stripe session |
| POST | `/api/payment/webhook` | Stripe webhook handler |

<p align="center">
  <img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">
</p>

## 🎨 UI/UX Highlights

### 🌟 Design Features
- 🎨 Modern, clean interface with Tailwind CSS
- 🌈 Smooth animations and transitions
- 📱 Fully responsive across all devices
- 🎯 Intuitive navigation and user flow
- 🖼️ High-quality food images
- 🛒 Real-time cart updates
- ⚡ Fast page load times
- ♿ Accessibility-friendly design

### 🎭 User Experience
- 🔍 Easy food search and filtering
- 🛒 Simple add-to-cart functionality
- 💳 Seamless checkout process
- 📦 Clear order status tracking
- 🎉 Success/error notifications
- 🔄 Loading states and skeletons
- 📱 Mobile-first approach

<p align="center">
  <img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">
</p>

## 🔮 Future Enhancements

### 🚀 Planned Features

**Phase 1 - User Experience**
- 📜 Order history for users
- ⭐ Rating and review system
- ❤️ Favorite items functionality
- 🔔 Real-time order notifications
- 📧 Email confirmations

**Phase 2 - Advanced Features**
- 📱 SMS notifications
- 🗺️ Live order tracking
- 👥 Multiple address support
- 💰 Wallet and loyalty points
- 🎁 Coupon and discount system

**Phase 3 - Scaling**
- 🚴 Delivery partner module
- 📊 Advanced analytics dashboard
- 👮 Multi-level admin roles
- 🌐 Multi-language support
- 📱 Mobile application (React Native)

**Phase 4 - Integration**
- 🔗 Social media login
- 💬 Live chat support
- 📈 Marketing automation
- 🤖 AI-powered recommendations
- 🎯 Personalized menu suggestions

<p align="center">
  <img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">
</p>

## 🎓 Learning Outcomes

This project demonstrates mastery in:

### 💡 Technical Skills
- ✅ Full-stack MERN development
- ✅ RESTful API design and implementation
- ✅ JWT authentication and authorization
- ✅ Payment gateway integration
- ✅ File upload handling
- ✅ Database modeling and optimization
- ✅ State management in React
- ✅ Responsive web design

### 🏗️ Architecture & Design
- ✅ Clean separation of concerns
- ✅ Modular code organization
- ✅ Scalable project structure
- ✅ Production-ready codebase
- ✅ Error handling and validation
- ✅ Security best practices

### 🚀 Industry Practices
- ✅ Environment variable management
- ✅ Git version control
- ✅ Code documentation
- ✅ API endpoint organization
- ✅ Middleware implementation
- ✅ Deployment considerations

<p align="center">
  <img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">
</p>

## ⭐ Why This Project Matters

### 🎯 Real-World Application
This project simulates a **production-ready food delivery platform** with all essential features including secure payments, user authentication, and admin management.

### 💼 Industry-Standard Architecture
Built following **MERN best practices** with clean code organization, proper separation of concerns, and scalable structure.

### 🔒 Security-First Approach
Implements **JWT authentication**, **password hashing**, **protected routes**, and **server-side payment verification** to ensure data security.

### 💳 Payment Gateway Integration
Successfully integrates **Stripe API** for secure online transactions, demonstrating understanding of real-world payment processing.

### 📦 Production-Ready Code
Features **proper error handling**, **environment variables**, **API documentation**, and **modular design** ready for deployment.

<p align="center">
  <img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">
</p>

## 🤝 Contributing

Contributions are what make the open-source community amazing! Any contributions you make are **greatly appreciated**.

### How to Contribute

1. 🍴 Fork the Project
2. 🌿 Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. 💾 Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. 📤 Push to the Branch (`git push origin feature/AmazingFeature`)
5. 🎉 Open a Pull Request

### 📝 Contribution Guidelines
- Write clean, documented code
- Follow existing code style
- Test your changes thoroughly
- Update documentation as needed

<p align="center">
  <img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">
</p>

## 🙏 Acknowledgments

- 🎨 **Tailwind CSS** team for the amazing utility-first framework
- 💳 **Stripe** for comprehensive payment documentation
- 🍃 **MongoDB** team for the flexible NoSQL database
- ⚛️ **React** community for excellent resources
- 🟢 **Node.js** and **Express** communities
- 👥 All contributors who help improve this project

<p align="center">
  <img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">
</p>


<div align="center">
  
  **Made with ❤️ and 🍕 by passionate developers**
  
  ⭐ **If you found this project helpful, please give it a star!** ⭐
  
  🍴 **Fork it and make it your own!**
  
</div>

<p align="center">
  <img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">
</p>
