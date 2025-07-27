import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import scheduleRoutes from './routes/scheduleRoutes.js';

const app = express();
const port = process.env.PORT || 3000;

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

// Middleware
app.use(cors({
  origin: process.env.CORS_ORIGIN, // Use .env value like http://localhost:8080
  methods: ['GET', 'POST'],
  credentials: true
}));
app.use(express.json());
app.use(limiter);

// Routes
app.use('/api', scheduleRoutes);

// Basic route
app.get('/', (req, res) => {
  res.json({ success: true });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Something went wrong!',
    message: err.message
  });
});

// Start server
app.listen(port, () => {
  console.log(`✅ Server is running on port ${port}`);
  console.log('🌱 Environment variables loaded:', {
    PORT: process.env.PORT,
    CORS_ORIGIN: process.env.CORS_ORIGIN,
    GEMINI_API_KEY: process.env.GEMINI_API_KEY ? 'Set' : 'Not set'
  });
});

console.log('🚀 App boot completed');


