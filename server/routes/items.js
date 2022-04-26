import express from 'express';
import { getItems, getItem, getContainer } from '../controllers/items.js'

const router = express.Router();

router.get('/', getItems);
router.get('/:itemId', getItem);
router.get('/:itemId/container', getContainer);

export default router;