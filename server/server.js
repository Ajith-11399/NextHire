import Sentry from './config/instrument.js';
import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongoDB.js';
import { clerkWebhook } from './controllers/webHooks.js';
import companyRoutes from './routes/companyRoutes.js';
import connectCloudinary from './config/cloudinary.js';
import jobRoutes from './routes/jobRoutes.js';
import userRoutes from './routes/userRoutes.js';
import { clerkMiddleware } from '@clerk/express';


const app = express();


Sentry.setupExpressErrorHandler(app);


await connectDB();
await connectCloudinary();

// Middlesware
app.use(cors());
app.use(express.json());
app.use(clerkMiddleware());


app.get('/', (req, res)=> res.send("API Working"));

// Sentry API
app.get("/debug-sentry", function mainHandler(req, res) {
    throw new Error("My first Sentry error!");
});
// Clerk Webhook
app.post('/webhooks', clerkWebhook);
// Company Route
app.use('/api/company', companyRoutes);
// Jobs Route
app.use('/api/jobs', jobRoutes);
// User Route
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;


app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`);
});