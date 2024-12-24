import express from 'express';

import {contact, resister, skill} from "../controller/user.controller.js";
import { signin } from '../controller/user.controller.js';
const router = express.Router();


router.post("/resister",resister);
router.post("/signin",signin);
router.post("/contact",contact);
router.post("/skill",skill);

export default router