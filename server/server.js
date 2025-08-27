import Sentry from './config/instrument.js';
import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongoDB.js';
import { clerkWebhook } from './controllers/webHooks.js';

const app = express();

Sentry.setupExpressErrorHandler(app);

await connectDB();

app.use(cors());
app.use(express.json());


app.get('/', (req, res)=> res.send("API Working"));
app.get("/debug-sentry", function mainHandler(req, res) {
    throw new Error("My first Sentry error!");
});
app.post('/webhooks', clerkWebhook);


Sentry.setupExpressErrorHandler(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`);
});
