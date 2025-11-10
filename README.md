# 🏠 Wanderlust - Airbnb Clone

A full-stack web application inspired by Airbnb, built with Node.js, Express, and MongoDB. This platform allows users to list properties, browse listings, leave reviews, and interact with an interactive map interface.

![Node.js](https://img.shields.io/badge/Node.js-22.14.0-green)
![Express](https://img.shields.io/badge/Express-5.1.0-blue)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-brightgreen)
![License](https://img.shields.io/badge/License-ISC-yellow)

## ✨ Features

- 🔐 **User Authentication** - Secure signup/login with Passport.js
- 🏡 **Property Listings** - Create, read, update, and delete property listings
- ⭐ **Reviews & Ratings** - Users can leave reviews on properties
- 🗺️ **Interactive Maps** - Mapbox integration for location visualization
- 📸 **Image Upload** - Cloudinary integration for image storage
- 🔒 **Authorization** - Only owners can edit/delete their listings
- 📱 **Responsive Design** - Mobile-friendly interface
- ⚡ **Flash Messages** - User feedback for actions
- 🛡️ **Input Validation** - Server-side validation with Joi

## 🛠️ Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling

### Authentication & Security
- **Passport.js** - Authentication middleware
- **Passport-Local** - Local authentication strategy
- **Express-Session** - Session management
- **Connect-Mongo** - MongoDB session store

### File Upload & Storage
- **Multer** - File upload handling
- **Cloudinary** - Cloud-based image storage

### Validation & Error Handling
- **Joi** - Schema validation
- **Custom Error Handlers** - Centralized error management

### View Engine
- **EJS** - Embedded JavaScript templating
- **EJS-Mate** - Layout support for EJS

### Maps
- **Mapbox SDK** - Geocoding and map visualization

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js (v22.14.0 or higher)
- MongoDB Atlas account
- Cloudinary account
- Mapbox account

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/saifsanadi26/AIRBINB_Project-.git
   cd AIRBINB_Project-
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory with the following variables:
   ```env
   ATLASDB_URL=your_mongodb_atlas_connection_string
   CLOUD_NAME=your_cloudinary_cloud_name
   CLOUD_API_KEY=your_cloudinary_api_key
   CLOUD_API_SECRET=your_cloudinary_api_secret
   MAP_TOKEN=your_mapbox_access_token
   NODE_ENV=development
   ```

4. **Initialize the database (optional)**
   
   To populate the database with sample data:
   ```bash
   node init/index.js
   ```

5. **Start the application**
   ```bash
   node app.js
   ```

6. **Access the application**
   
   Open your browser and navigate to: `http://localhost:8080`

## 📁 Project Structure

```
AIRBNB_PROJECT-main/
├── controllers/          # Route controllers
│   ├── listings.js      # Listing operations
│   ├── review.js        # Review operations
│   └── user.js          # User authentication
├── models/              # Mongoose models
│   ├── listing.js       # Listing schema
│   ├── review.js        # Review schema
│   └── user.js          # User schema
├── routes/              # Express routes
│   ├── listing.js       # Listing routes
│   ├── review.js        # Review routes
│   └── user.js          # User routes
├── views/               # EJS templates
├── public/              # Static files (CSS, JS, images)
├── utils/               # Utility functions
│   ├── ExpressError.js  # Custom error class
│   └── wrapAsync.js     # Async error wrapper
├── init/                # Database initialization
│   ├── data.js          # Sample data
│   └── index.js         # Seed script
├── middleware.js        # Custom middleware
├── schema.js            # Joi validation schemas
├── cloudConfig.js       # Cloudinary configuration
├── app.js               # Main application file
├── package.json         # Dependencies
└── .gitignore          # Git ignore rules
```

## 🔑 Environment Variables

| Variable | Description |
|----------|-------------|
| `ATLASDB_URL` | MongoDB Atlas connection string |
| `CLOUD_NAME` | Cloudinary cloud name |
| `CLOUD_API_KEY` | Cloudinary API key |
| `CLOUD_API_SECRET` | Cloudinary API secret |
| `MAP_TOKEN` | Mapbox access token |
| `NODE_ENV` | Environment (development/production) |

## 🎯 API Routes

### Listings
- `GET /listings` - View all listings
- `GET /listings/new` - Show create listing form
- `POST /listings` - Create new listing
- `GET /listings/:id` - View specific listing
- `GET /listings/:id/edit` - Show edit form
- `PUT /listings/:id` - Update listing
- `DELETE /listings/:id` - Delete listing

### Reviews
- `POST /listings/:id/reviews` - Add review
- `DELETE /listings/:id/reviews/:reviewId` - Delete review

### Authentication
- `GET /signup` - Show signup form
- `POST /signup` - Register new user
- `GET /login` - Show login form
- `POST /login` - Authenticate user
- `GET /logout` - Logout user

## 🔒 Security Features

- Password hashing with Passport-Local-Mongoose
- Session-based authentication
- CSRF protection via session secrets
- Input validation and sanitization
- Authorization checks for protected routes
- Secure cookie configuration

## 🐛 Bug Fixes Applied

1. Fixed undefined `err` variable in MongoDB store error handler
2. Fixed typo in `saveRedirectUrl` middleware (redirectUrl property)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 👨‍💻 Author

**Saif Sanadi**

## 🙏 Acknowledgments

- Inspired by Airbnb
- Built as a learning project for full-stack web development
- Thanks to all the open-source libraries used in this project

## 📞 Support

For support, email your-email@example.com or create an issue in the repository.

---

**Happy Coding! 🚀**
