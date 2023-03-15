import { development } from "../../knexfile"
import knex from "knex"

const Knex = knex(development)

export {
    Knex
}