import express from 'express';
import itemRouter from './items.js';
import containerRouter from './containers.js';

const router = express.Router();

router.use('/items', itemRouter);
router.use('/containers', containerRouter);

export default router;