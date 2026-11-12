# Bade Bhaiya 10.com (MERN)

React (Vite) + Express + MongoDB + REST API. Admin-only resource uploads (JWT).

## Run
```bash
# 1) API
cd server && cp .env.example .env   # fill MONGO_URI, ADMIN_EMAIL, ADMIN_PASSWORD, JWT_SECRET
npm install && npm run seed && npm run dev      # http://localhost:5000

# 2) Frontend
cd ../client && npm install && npm run dev      # http://localhost:5173
```
## Update later
- Naye/change subjects: `server/src/data/subjects.js` edit karo, phir `npm run seed` (resources safe rehte hain).
- Notes/books/PYQ add: `/admin` page pe login karke link daalo.
- Theme colours: `client/src/index.css` ke top ke CSS variables.
- Site name: `client/src/config.js`.
