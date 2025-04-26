// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */


    module.exports = {
        development: {
          client: 'sqlite3',
          connection: {
            filename: './strawhats.sqlite3' // ✅ points to our Straw Hats database
          },
          useNullAsDefault: true, // ✅ needed for SQLite3
          migrations: {
            directory: './migrations' // ✅ knex will create/use this folder
          },
          seeds: {
            directory: './seeds' // ✅ knex will create/use this folder
          },
          pool: {
            afterCreate: (conn, done) => {
              conn.run('PRAGMA foreign_keys = ON', done); // ✅ ensure foreign keys are respected
            }
          }
        }
      };


