import { Knex } from "../database/index.js"

export const UserController = {
    async index (req, res) {
        const results = await Knex('users')

        return res.json(results)
    }
}