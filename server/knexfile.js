// Update with your config settings.
require("dotenv").config({
  path: "./.env",
});
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

module.exports = {
  client: "pg",
  connection: {
    // host: process.env.DB_HOST || "127.0.0.1",
    // port: process.env.DB_PORT || 5432,
    database: process.env.DB_NAME || "lenz",
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  },
  migrations: {
    directory: "./db/migrations",
  },
  seeds: {
    directory: "./db/seeds",
  },
};
