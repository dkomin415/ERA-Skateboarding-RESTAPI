import express from 'express';
import cors from 'cors';
import db from './config/connection.js';
import routes from './controllers/index.js';
// import path from 'path';                        

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// turn on routes
app.use(routes);

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`🌍 connected on localhost${PORT}`)
    });
});

