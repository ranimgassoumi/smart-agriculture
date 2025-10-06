# Smart Agriculture API - Authentication System

This is the authentication part of the Smart Agriculture project with JWT (JSON Web Token) implementation.

## Features

- User registration with email and password
- User login with JWT token generation
- Password hashing using bcryptjs
- Protected routes with JWT middleware
- User profile management

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Database
MONGO_URI=mongodb://localhost:27017/smart_agriculture

# JWT Secret (change this to a secure random string in production)
JWT_SECRET=your_super_secret_jwt_key_here_change_in_production

# Server Port
PORT=5000

# Environment
NODE_ENV=development
```

### 3. Start the Server

```bash
# Development mode
npm run dev

# Production mode
npm start
```

## API Endpoints

### Authentication Routes

#### Register User
- **POST** `/api/auth/register`
- **Body:**
  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  }
  ```
- **Response:**
  ```json
  {
    "_id": "user_id",
    "email": "user@example.com",
    "token": "jwt_token_here"
  }
  ```

#### Login User
- **POST** `/api/auth/login`
- **Body:**
  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  }
  ```
- **Response:**
  ```json
  {
    "_id": "user_id",
    "email": "user@example.com",
    "token": "jwt_token_here"
  }
  ```

### User Routes (Protected - Requires JWT Token)

#### Get User Profile
- **GET** `/api/users/profile`
- **Headers:** `Authorization: Bearer <jwt_token>`
- **Response:**
  ```json
  {
    "_id": "user_id",
    "email": "user@example.com",
    "createdAt": "2023-01-01T00:00:00.000Z",
    "updatedAt": "2023-01-01T00:00:00.000Z"
  }
  ```

#### Update User Profile
- **PUT** `/api/users/profile`
- **Headers:** `Authorization: Bearer <jwt_token>`
- **Body:**
  ```json
  {
    "email": "newemail@example.com"
  }
  ```

#### Delete User Account
- **DELETE** `/api/users/profile`
- **Headers:** `Authorization: Bearer <jwt_token>`

## Testing with Postman/Thunder Client

### 1. Register a new user
```
POST http://localhost:5000/api/auth/register
Content-Type: application/json

{
  "email": "test@example.com",
  "password": "password123"
}
```

### 2. Login
```
POST http://localhost:5000/api/auth/login
Content-Type: application/json

{
  "email": "test@example.com",
  "password": "password123"
}
```

### 3. Access protected route (use token from login response)
```
GET http://localhost:5000/api/users/profile
Authorization: Bearer YOUR_JWT_TOKEN_HERE
```

## Security Features

- Passwords are hashed using bcryptjs before storing
- JWT tokens expire after 1 hour
- Protected routes require valid JWT token
- Email validation and uniqueness checks
- Error handling for invalid credentials

## Project Structure

```
├── controllers/
│   ├── authController.js    # Authentication logic
│   └── UserController.js    # User profile management
├── middleware/
│   └── authMiddleware.js    # JWT verification middleware
├── models/
│   └── User.js             # User schema with password hashing
├── routes/
│   ├── authRoutes.js       # Authentication routes
│   └── userRoutes.js       # User profile routes
├── sever.js                # Main server file
├── package.json            # Dependencies
└── README.md              # This file
```

## Next Steps

This authentication system is ready for integration with your smart agriculture features. You can now:

1. Add more user fields (name, role, etc.)
2. Implement role-based access control
3. Add password reset functionality
4. Integrate with your sensor and farming data endpoints
