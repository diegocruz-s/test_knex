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

export function onUpdateTrigger (table) {
  return `
    CREATE TRIGGER ${table}_updated_at
    BEFORE UPDATE ON ${table}
    FOR EACH ROW
    EXECUTE PROCEDURE on_update_timestamps();
  `
}