import { onUpdateTrigger } from "../../../knexfile.js"

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
    return knex.schema.createTable('projects', table => {
      table.increments('id')
      table.text('title')
  
      // relationship

      table.integer('user_id')
        .references('users.id')
        .notNullable()
        .onDelete('CASCADE')

      table.timestamps(true, true)
    }).then(() => {
        knex.raw(onUpdateTrigger('projects'))
      })
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  export async function down(knex) {
    return knex.schema.dropTable('projects')
  };
  