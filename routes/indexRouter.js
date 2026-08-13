import { Router } from "express";
import { getDeetsPage, getIndexPage, postNav } from '../controllers/indexController.js'


const indexRouter = Router()

indexRouter.get('/', getIndexPage)

indexRouter.get('/deets/:index', getDeetsPage)

indexRouter.post('/nav', postNav)

export default indexRouter