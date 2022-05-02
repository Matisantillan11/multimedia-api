import { Router } from 'express'
import {
	uploadImage,
} from '../controllers/file'

import validateEntries from '../middlewares/validateEntries'

const router = Router()

router.post('/', [validateEntries], uploadImage)

export default router
