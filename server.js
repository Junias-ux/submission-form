import express from 'express';
import apiRouter from './routes/api.routes.js';
import { notFoundHandler, finalErrorHandler } from './middleware/error.middleware.js';

const app = express();
const PORT = 3000;

app.use(express.json()); // middleware to parse incoming JSON request bodies into req.body.
app.use(express.urlencoded({ extended: true })); // parse URL-encoded request bodies - the default format submitted by HTML <form> elements.
app.use('/api', apiRouter); // Mount the apiRouter on the /api path
app.use(notFoundHandler); // Middleware to handle 404 Not Found errors
app.use(finalErrorHandler); // Middleware to handle all other errors

app.use((req, res, next) => {
    console.log(req.method);
    console.log(req.url);
    
    next();
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});