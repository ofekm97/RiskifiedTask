import { Router } from 'express';
import { commitPayment } from '../handlers/commitPayment';
import chargeController from '../controllers/charge.controller';
import { returnSuccessOrFailed } from '../handlers/sendSucessOrFail';

const router = Router();
router.post('/', chargeController.post, commitPayment, returnSuccessOrFailed);

export default router;
