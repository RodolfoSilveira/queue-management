import { Router } from 'express'
import UserController from './controllers/UserController'
import QueueController from './controllers/QueueController'

const routes = Router()

routes.post('/createUser', UserController.store)
routes.post('/addToLine', QueueController.addToLine)
routes.post('/findPosition', QueueController.findPosition)
routes.get('/showLine', QueueController.showLine)
routes.post('/filterLine', QueueController.filterLine)
routes.get('/popLine', QueueController.popLine)

export default routes
