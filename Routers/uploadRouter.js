import { _express } from "../Utils/Express.js";
import { _multer } from "../Utils/Multer.js";
import uploadController from "../Controllers/UploadController.js";

const router = _express.getRouter()
router.get('/', _multer.init().single('file'), uploadController.getCsv)

export default router