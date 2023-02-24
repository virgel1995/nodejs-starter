import { Router } from 'express';

import user from './user.js';
import social from "./social.js";

const router = Router();

router.use('/user', user);
router.use('/social', social);

export default router;