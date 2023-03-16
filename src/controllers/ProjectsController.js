import { Knex } from "../database/index.js"

export const ProjectsController = {
    async index (req, res, next) {
        try {
            const { user_id, page = 1 } = req.query
            const query = Knex('projects')
                .limit(5)
                .offset((page - 1) * 5)

            const countObj = Knex('projects').count()

            if(user_id) {
                query
                    .where({ user_id })
                    .join('users', 'users.id', '=', 'projects.user_id')
                    .select('projects.*', 'users.username')

                countObj
                    .where({ user_id })
            }
            const [ count ] = await countObj

            console.log('count:', count)
            res.header('X-Total-Count', count["count"])

            const results = await query

            return res.json(results)
        } catch (error) {
            next(error)
        }
    },

    async create (req, res, next) {
        try {
            const { title, user_id } = req.body

            await Knex('projects').insert({ title, user_id })

            return res.status(201).json({
                success: 'Project create was successfull',
            })
        } catch (error) {
            next(error)
        }
    },
}