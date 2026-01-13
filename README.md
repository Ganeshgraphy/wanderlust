🌍 Wanderlust – Full-Stack Accommodation Platform

Wanderlust is a full-stack web application that allows users to explore, create, review, and manage accommodation listings with real-world features such as authentication, image uploads, maps, and cloud deployment.
This project was built to understand how real production-level web applications work end-to-end.

🚀 Live Demo

👉 Deployed on Render
https://wanderlust-l5gz.onrender.com/listings

📌 Key Features
🔐 User Authentication & Authorization
Secure user signup and login using Passport.js
Session-based authentication with MongoDB session store
Authorization checks to ensure:
Only listing owners can edit/delete their listings
Only logged-in users can create reviews or listings

🏠 Listings Management (CRUD)
Users can:
Create new accommodation listings
Edit their own listings
Delete listings they own
View all listings on the homepage
Each listing includes:
Title
Description
Price
Location
Country
Image upload

🖼️ Image Upload with Cloudinary
Integrated Cloudinary for cloud image storage
Images are uploaded using Multer
Prevents storing large files on the server
Optimized for production deployment

🗺️ Interactive Maps (Mapbox)
Each listing displays its geographical location using Mapbox
Marker placement based on listing coordinates
Enhances real-world usability and user experience

⭐ Reviews & Ratings System
Logged-in users can:
Add reviews to listings
Give star ratings
Listing owners can delete reviews related to their listings
Data relationships managed using MongoDB references

🧠 MVC Architecture
The project strictly follows MVC (Model-View-Controller) architecture:
Models → MongoDB schemas (Listings, Users, Reviews)
Views → EJS templates
Controllers → Business logic
Routes → Clean and modular routing
This improves:
Scalability
Maintainability
Code readability

⚠️ Error Handling & Validation
Custom error handling using Express middleware
Server-side validation using Joi
Flash messages for user feedback (success & error messages)
Graceful handling of invalid routes (404 pages)

☁️ Deployment & Environment Management
Deployed on Render
Environment variables handled using .env
MongoDB Atlas used for production database
Secure handling of API keys and secrets

🛠️ Tech Stack
Frontend : HTML, CSS, JavaScript, EJS, Bootstrap.
Backend : Node.js, Express.js, MongoDB, Mongoose, Passport.js, Cloud & Tools, Cloudinary (Image Storage), Mapbox (Maps), Render (Deployment), MongoDB Atlas, Git & GitHub.

📁 Project Structure
Wanderlust/
│
├── app.js
├── cloudConfig.js
├── middleware.js
├── package.json
├── .env
│
├── controllers/
│   ├── listings.js
│   ├── reviews.js
│   └── users.js
│
├── models/
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
├── routes/
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
├── views/
│   ├── layouts/
│   ├── listings/
│   ├── users/
│   └── includes/
│
├── public/
│   ├── css/
│   └── js/
│
└── utils/
    ├── ExpressError.js
    └── wrapAsync.js

⚙️ How to Run Locally
1️⃣ Clone the Repository
git clone https://github.com/Ganeshgraphy/wanderlust.git
cd wanderlust

2️⃣ Install Dependencies
npm install

3️⃣ Setup Environment Variables
Create a .env file in the root directory:
CLOUD_NAME=your_cloudinary_name
CLOUD_API_KEY=your_cloudinary_key
CLOUD_API_SECRET=your_cloudinary_secret
MAP_TOKEN=your_mapbox_token
SESSION_SECRET=your_session_secret
ATLAS_URL=your_mongodb_atlas_connection_string

4️⃣ Run MongoDB (If using local DB)

Make sure MongoDB is running locally
or use MongoDB Atlas for cloud database.

5️⃣ Start the Server
node app.js

6️⃣ Open in Browser
http://localhost:8080

📚 What I Learned from This Project
How real-world full-stack applications are structured,
Implementing MVC architecture effectively,
Handling authentication, authorization, and sessions,
Working with cloud services (Cloudinary, MongoDB Atlas),
Debugging production-level deployment issues,
Importance of environment variables and security,
Deploying backend applications to cloud platforms.

📌 Future Improvements
Search & filter functionality
Booking system
Payment integration
Responsive UI improvements

👤 Author
Ganesh
Full-Stack Developer
GitHub: https://github.com/Ganeshgraphy
