### 📖 Disney+ Clone Full Stack Application

This project is a **full-stack Disney+ Clone application** that replicates the core functionalities and user interface of the Disney+ streaming service. It includes secure user authentication, Google OAuth 2.0 integration, a responsive frontend, and a structured backend API.

Built using modern technologies:

- **Frontend**: React with TypeScript, React Router DOM, Context API, Axios
- **Backend**: Express.js, MongoDB with Mongoose
- **Authentication**: JWT + Google OAuth 2.0
- **Styling**: TailwindCSS (or your preferred styling solution)

---

## 🗂️ Folder Structure

disney-clone/
| ├── client/ # React Frontend (TypeScript)
| └── server/ # Express Backend


---

## 🚀 Installation

## 1. Clone Repository

```bash
git clone https://github.com/your-username/disney-clone.git
cd disney-clone

```
---

## 2. Backend Setup (/server)

```bash
cd server
npm install

``` 

Create .env file in /server:

```env

PORT=5000
MONGO_URI=mongodb://localhost:27017/disney-clone
JWT_SECRET=your_jwt_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
CLIENT_URL=http://localhost:5173
Start backend server:

```

```bash
npm run dev

```
Backend runs at: http://localhost:5000

---

## 3. Frontend Setup (/client)

```bash
cd client
npm install
```

Create .env file in /client:
```env

VITE_BACKEND_URL=http://localhost:5000
VITE_GOOGLE_CLIENT_ID=your_google_client_id
```

Start frontend dev server:

```bash
npm run dev
```
Frontend runs at: http://localhost:5173

---  

## 🔐 Authentication Flow
- JWT tokens are issued upon successful login or registration

- Tokens are stored in HTTP-only cookies for secure browser sessions

- Google OAuth 2.0 uses server-side token verification

- Protected routes implemented on:

- Frontend using context and route guards

- Backend using JWT middleware

---

## 🔄 API Endpoints

### Auth Routes

| Method | Endpoint           | Description            |
|--------|--------------------|------------------------|
| POST   | `/api/auth/register` | Register new user     |
| POST   | `/api/auth/login`    | Login with credentials |
| POST   | `/api/auth/google`   | Google OAuth login     |
| GET    | `/api/auth/me`       | Get current user       |
| POST   | `/api/auth/logout`   | Logout user            |


---

## 📱 Responsive Design
The frontend is fully responsive and tested on:

- ✅ Mobile devices (iOS/Android)

- ✅ Tablets

- ✅ Desktop screens

Designed with TailwindCSS (or equivalent CSS framework) to support scalable UI components.


---

## 🛡️ Security Notes
- JWT stored in HTTP-only cookies to prevent XSS attacks

Passwords hashed using bcrypt

- Input validation and error handling on backend

- CORS properly configured to allow frontend-backend communication

---

## 🧪 Testing
You can add unit and integration tests for components, routes, and API endpoints as needed

---

## 🧰 Tools & Libraries

| Library               | Description                                |
|-----------------------|--------------------------------------------|
| `bcryptjs`            | Password hashing                           |
| `jsonwebtoken`        | JWT generation and validation              |
| `mongoose`            | MongoDB schema modeling                    |
| `axios`               | HTTP client (frontend ↔ backend)           |
| `react-router-dom`    | SPA routing                                |
| `react-oauth/google`  | Google sign-in integration                 |
| `dotenv`              | Environment variable management            |
| `cookie-parser`       | Read/write HTTP-only cookies in Express    |


--- 

## 🧑‍💻 Author
### Made with ❤️ by Your Name
---