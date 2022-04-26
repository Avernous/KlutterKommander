import express from 'express';
import { getContainers, getContainer, getParentContainer, getchildContainers, getItemsByContainer} from '../controllers/containers.js'

const router = express.Router();

router.get('/:containerId/parentContainer', getParentContainer);
router.get('/:containerId/childContainers', getchildContainers);
router.get('/:containerId/items', getItemsByContainer);
router.get('/:containerId', getContainer);
router.get('/', getContainers);



export default router;