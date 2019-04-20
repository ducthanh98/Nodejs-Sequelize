import { Router } from 'express';
import controller from './employee.controller';
export const router = Router();

router.get('/getAll',controller.getAll);
router.post('/create',controller.create);
