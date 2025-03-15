# Job Board - Installation & Setup Guide

# Prerequisites

Ensure you have the following installed on your system:

Node.js (v18+ recommended)

npm (v9+ recommended)

PostgreSQL (if using a database)

Git

Installation

1. Clone the Repository

git clone https://github.com/KunalBhika/Job-Board.git
cd Job-Board

2. Install Dependencies

Backend

cd backend
npm install

Frontend

cd ../frontend
npm install

Environment Variables

Create a .env file in the backend directory and add the required environment variables:

PORT=5000
DATABASE_URL=your_database_url_here
JWT_SECRET=your_secret_key_here

Running the Project

1. Start the Backend Server

cd backend
npm start

2. Start the Frontend

cd ../frontend
npm run dev

The application will now be running. The frontend should be accessible at http://localhost:5173/ (default Vite port), and the backend at http://localhost:5000/.

Building for Production

If deploying the frontend, build it using:

cd frontend
npm run build

This will generate a dist/ folder with the production-ready files.

For backend deployment, ensure all dependencies are installed and environment variables are correctly set up before running:

cd backend
npm start

Deployment Notes

If deploying on Render/Vercel, ensure all dependencies are installed in the correct order.

If using Vercel for frontend, add @vitejs/plugin-react as a dependency to avoid module errors.

Ensure database configurations are correct before deploying the backend.

For any issues, feel free to raise an issue on the GitHub repository.
