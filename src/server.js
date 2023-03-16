import express from 'express'

import { routes } from './routes.js'

const app = express()

app.use(express.json())
app.use('/users', routes)

// notFound
app.use((req, res, next) => {
    const error = new Error('Not found')

    error.status = 404

    next(error)
})

// catch all
app.use((error, req, res, next) => {
    res.status(error.status || 500) 
    res.json({ error: error.message })
})

app.listen(3333, () => {
    console.log('Server is running...')
})