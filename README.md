#Matt’s Pizzeria — Full-Stack Food Ordering Platform

Description: The platform allows users to browse a dynamic menu, manage a shopping cart, authenticate via Google OAuth or credentials, and complete a simulated checkout flow with delivery or carryout options.

---

#Live Demo: https://mattspizzeria.vercel.app

---

#Features

User Experience:
-	Fully responsive UI optimized for mobile, tablet, and desktop.
-	Dynamic homepage with featured menu items and promotions
-	Smooth navigation with persistent layout and session awareness

Menu System:
-	Dynamic menu rendering from MongoDB database
-	Categorized items (Pizza, Sides, Drinks, etc.)
-	Reusable menu item components

Shopping Cart:
-	Global cart state managed with React Context API
-	Add / remove items with instant UI updates
-	Animated “fly-to-cart” interaction for enhanced UX
-	Real-time cart badge with item count indicator

Checkout Flow:
-	Interactive checkout modal system
-	Choose between **Delivery** or **Carryout**
-	Dynamic pricing with delivery fee calculation
-	Profile-based address auto-fill for delivery orders
-	Order confirmation with success state and cart reset

Authentication & User System:
-	Secure authentication using NextAuth.js
-	Google OAuth integration
-	Credential-based login support
-	Persistent user sessions
-	Editable user profile (name, email, address)

Profile System
-	User profile dashboard
-	Stored address used for delivery checkout
-	Account updates persisted via API routes

---

#Tech Stack

Frontend:
-	Next.js (App Router)
-	React
-	TailwindCSS

Backend:
-	Next.js (API Routes)
-	MongoDB (Atlas)
-	Mongoose (ODM)

Authentication:
-	NextAuth.js (Google OAuth + Credentials)

State Management
-	React Context API (Cart & Order state)

Deployment
-	Vercel

---

#Architecture Overview

- **Frontend:** Next.js App Router with component-based UI
- **Backend:** API routes for user profile and data handling
- **Database:** MongoDB Atlas for user and menu storage
- **Auth:** NextAuth session-based authentication
- **State:** Global cart and order state via Context API

---

## 🔐 Environment Variables

The application requires the following environment variables:

NEXTAUTH_URL=
NEXTAUTH_SECRET=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
MONGODB_URI=
