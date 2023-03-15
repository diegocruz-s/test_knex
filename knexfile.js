// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
export const development = {
    client: 'pg',
    connection: {
      database: 'knex_test',
      user: 'postgres',
      password: 'post123'
    },
    migrations: {
      tablename: 'knex_migrations',
      directory: `./src/database/migrations`
    },
    seeds: {
      directory: `./src/database/seeds`
    },
};
