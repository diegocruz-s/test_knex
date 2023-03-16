import express from "express"
import { UserController } from "./controllers/UserController.js"

const routes = express.Router()

routes.get('/', UserController.index)

export { 
    routes
}