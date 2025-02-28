import express from 'express';
const router = express.Router();

import apiRoute from './api/index.js';
import homeRoutes from './html/index.js'

router.use('/', homeRoutes)
router.use('/api', apiRoute);

router.use((req, res) => {
    res.status(404).send('<h1>404 Error</h1>');
});

export default router;