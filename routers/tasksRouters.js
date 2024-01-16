import {Router} from 'express'
import * as tasksController from '../controllers/tasksController.js'

const router = Router();

router.get('/', tasksController.getTasks);
router.get('/:id', tasksController.getTaskById);
router.post('/', tasksController.createTask);
router.delete('/:id', tasksController.deleteTask);
router.put('/:id', tasksController.updateTask);

export default router;