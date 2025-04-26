
# Straw Hat Crew App

Welcome to the Straw Hat Crew App! 🏴‍☠️

This application showcases the legendary pirate crew from the One Piece universe.  
It features a login system, a protected dashboard, and a dynamic display of Straw Hat Pirates' information — now enhanced with new features!

## 🚀 Features

- **Login/Authentication:**  
  Secure login system. Only authenticated users can access the dashboard.
  
- **Protected Routes:**  
  Unauthorized users are redirected to the login page.

- **Dashboard:**  
  Displays the Straw Hat Crew members dynamically from the backend API.

- **Flip Animation on Cards (NEW! 🌀):**  
  Clicking on a crew member’s card flips it to reveal a short backstory!

- **Updated API & Database (NEW! 📦):**  
  Our backend now serves cleaner data with additional story fields for each pirate.

- **Mobile Responsive:**  
  The app adjusts beautifully across devices.

## 🌐 Application URLs and Ports

- **Frontend (React App):**  
  [http://localhost:3000/](http://localhost:3000/)

- **Backend (Server API):**  
  [http://localhost:8080/](http://localhost:8080/)

## 🛠️ Tech Stack

- Frontend: React
- State Management: useState, useEffect
- Styling: CSS Modules
- Backend: Node.js, Express.js
- Database: SQLite3 with Knex.js
- Authentication: Basic Login Form (future upgrade ideas: JWT!)

## 📂 Installation Instructions

1. Clone the repo:
   ```bash
   git clone https://github.com/jmg1410/straw-hat-crew-app.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the frontend:
   ```bash
   npm start
   ```

4. Backend setup:
   - Navigate to the backend directory.
   - Install backend dependencies:
     ```bash
     npm install
     ```
   - Start the backend server:
     ```bash
     npm run server
     ```
   - Server runs on `http://localhost:8080/`

5. Make sure both frontend and backend servers are running at the same time.

6. Environment variables needed:
   - (none yet — local development works without any `.env` file!)

## 📜 API Endpoints (Backend)

- `GET /strawhats` — Get all Straw Hat crew members
- `POST /login` — (Mock login)

*Our backend database has been updated to now include short backstories for each character.*

## 🧪 Testing

Coming soon! (Manual testing recommended for now using your browser)

## 📅 Changelog

| Date        | Update Description                            |
| ----------- | ---------------------------------------------- |
| 2025-04-26  | Implemented card flip animation                |
| 2025-04-26  | Updated backend API with new `backstory` fields |
| 2025-04-26  | General UI/UX improvements on dashboard         |

## 🧹 Future Enhancements

- Expand roster with pirates from other crews (Whitebeard, Blackbeard, etc.)
- Sort crew members by ship or affiliation
- Add token-based authentication (JWT)
- Add more detailed animations and sound effects

## ✨ How to Use

1. Start both backend and frontend servers.
2. Open your browser and visit [http://localhost:3000/](http://localhost:3000/).
3. Login using **luffy/gomugomuno** combination.
4. Once inside the dashboard, **click on a card** to flip it and see the crew member’s short backstory!
5. Enjoy the pirate vibes! 🏴‍☠️

## 👒 Credits

Developed with ❤️ by Jay Marmol  
Inspired by One Piece ✨

#login credentials
Username: luffy
Password: gomugomuno
