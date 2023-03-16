import express from 'express'

import { routes } from './routes.js'

const app = express()

app.use('/users', routes)

app.listen(3333, () => {
    console.log('Server is running...')
})