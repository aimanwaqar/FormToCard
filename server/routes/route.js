import  express from "express";
const router = express.Router();
import { getImage, uploadImage } from "../controller/image-controller.js";
import upload from '../middleware/upload.js'
import { sendData } from "../controller/user-controller.js";

const url = "http://localhost:8000"

router.post('/file/upload',upload.single('file'), uploadImage);
router.get('/file/:filename', getImage);
router.post('/send/data', sendData);

export default router;