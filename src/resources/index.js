import { Router } from 'express';
import { router as employeesRouter} from './employees/employees.routes';

export const router = Router();

router.use('/employees', employeesRouter)