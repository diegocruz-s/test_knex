import express from "express"
import { ProjectsController } from "./controllers/ProjectsController.js"
import { UserController } from "./controllers/UserController.js"

const routes = express.Router()

// users
routes.get('/users', UserController.index)
routes.post('/users', UserController.create)
routes.put('/users/:id', UserController.update)
routes.delete('/users/:id', UserController.delete)

// projects
routes.get('/projects', ProjectsController.index)
routes.post('/projects', ProjectsController.create)

export { 
    routes
}