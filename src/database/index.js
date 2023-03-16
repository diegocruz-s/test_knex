import knex from "knex"

import { development } from "../../knexfile.js"

const Knex = knex(development)

export {
    Knex
}