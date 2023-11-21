import express from "express";
import authRoutes from './routes/auth.routes.js';
import { POSTS_COLLECTION, USER_COLLECTION } from "./db.js";
import { isAuthenticated } from "./middlewares/isAuthenticated.js";

// Initialize app
const app = express();

// Middlewares
app.use(express.json());


// Listen to a Port Number
const PORT = 8081;
app.listen(PORT, () => {
  console.log(`Server is up and running on http://localhost:${PORT}`);
});

const BASE_PATH = '/api'

// Handle Routes
app.get(BASE_PATH, isAuthenticated, (req, res) => {
  res.status(200).json(POSTS_COLLECTION);
})

app.use(BASE_PATH, authRoutes);