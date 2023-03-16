import express from "express"
import { UserController } from "./controllers/UserController.js"

const routes = express.Router()

routes.get('/', UserController.index)
routes.post('/', UserController.create)
routes.put('/:id', UserController.update)
routes.delete('/:id', UserController.delete)

export { 
    routes
}