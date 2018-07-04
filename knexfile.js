module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/consensus_dev',
    migrations: {
      directory: __dirname + '/db/migrations',
    },
    seeds: {
      directory: __dirname + '/db/seeds',
    },
  }
}
