Employee Management System (MERN Stack)

A full-stack Employee Management System built using the MERN stack (MongoDB, Express.js, React, Node.js).
This application allows users to add, view, search, filter, and paginate employee records with a clean Bootstrap UI.

Tech Stack

Frontend

React

React Router DOM

Bootstrap 5

Fetch API

Backend

Node.js

Express.js

Mongoose

Database

MongoDB (Local)

Features

Home dashboard page

Add new employee

View employee list

Search employees by name

Filter employees by department and salary range

Backend-driven pagination

Responsive UI using Bootstrap

RESTful API architecture

Project Structure
merndemo/
│
├── backend/
│   ├── server.js
│   ├── package.json
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── home.jsx
│   │   ├── addemp.jsx
│   │   ├── emplist.jsx
│   │   ├── style.css
│   ├── package.json
│
├── .gitignore
└── README.md

Database Details

Database name: practicedb

Collection name: employees

MongoDB connection is handled in the backend using Mongoose.

Installation & Setup
1. Clone the Repository
git clone https://github.com/yourusername/merndemo.git
cd merndemo

2. Backend Setup
cd backend
npm install
node server.js


Backend will run on:

http://localhost:5000

3. Frontend Setup

Open a new terminal:

cd frontend
npm install
npm start


Frontend will run on:

http://localhost:3000

API Endpoints
Add Employee
POST /addemp

Get Employees (Search, Filter, Pagination)
GET /getemp?page=1&limit=5&name=&dept=&minsal=&maxsal=

Pagination Logic

Pagination is handled on the backend using:

skip

limit

Total record count is returned for page calculation

This ensures scalability for large datasets

Screens Implemented

Home Page

Add Employee Page

Employee List with Search & Pagination

License

This project is for learning and educational purposes.