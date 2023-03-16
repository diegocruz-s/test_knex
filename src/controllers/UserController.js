import { Knex } from "../database/index.js"

export const UserController = {
    async index (req, res) {
        const results = await Knex('users')
            .where('deleted_at', null)

        return res.json(results)
    },

    async create(req, res, next){
        try {
            const { username } = req.body

            await Knex('users').insert({ username })

            return res.status(201).json({
                success: 'User create was successfull',
            })
        } catch (error) {
            next(error)
        }
                
    },

    async update (req, res, next) {
        try {
            const { username } = req.body
            const { id } = req.params

            await Knex('users')
                .update({ username })
                .where({ id })

            return res.status(204).send()

        } catch (error) {
            next(error)
        }
    },

    async delete (req, res, next) {
        try {
            const { id } = req.params

            await Knex('users')
                .where({ id })
                .update('deleted_at', new Date())

            return res.status(204).send()

        } catch (error) {
            next(error)
        }
    },
}