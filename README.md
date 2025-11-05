# MarketConnect Backend

Backend server for MarketConnect — a platform where business owners and marketers meet to trade smarter.

## Features

- User authentication (JWT)
- Role-based access control (Business owners & Marketers)
- Product management with search and filters
- Real-time chat with Socket.io
- Order management and tracking

## Tech Stack

- Node.js + Express
- TypeScript
- MongoDB
- Socket.io for real-time features
- JWT for authentication

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- MongoDB running locally or MongoDB Atlas connection string

### Installation

1. Clone the repository:
```bash
git clone [your-repo-url]
cd marketconnect-backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
PORT=3000
	MONGO_URL=mongodb://localhost:27017/marketconnect
JWT_SECRET=your-secret-key-change-this-in-production
```

4. Start the development server:
```bash
npm run dev
```

The server will start on http://localhost:3000

## API Documentation

### Authentication
- POST /api/auth/register - Register new user
- POST /api/auth/login - Login
- GET /api/auth/me - Get current user

### Products
- GET /api/products - List products (with search & filters)
- POST /api/products - Create product (business owners only)
- GET /api/products/:id - Get single product
- PUT /api/products/:id - Update product (owner only)
- DELETE /api/products/:id - Delete product (owner only)

## License

MIT