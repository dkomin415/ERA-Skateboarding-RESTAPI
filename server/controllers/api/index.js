import express from 'express';
const router = express.Router();

import trickRoutes from './trick-controllers.js';

router.use('/tricks', trickRoutes);

export default router;