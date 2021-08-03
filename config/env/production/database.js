const parse = require("pg-connection-string").parse;
//const config = parse(process.env.DATABASE_URL);
// Ajouter config. devant chaque 


module.exports = ({ env }) => {
  const { host, port, database, user, password } = parse(env("DATABASE_UL"));
  return {
    defaultConnection: "default",
    connector: "bookshelf",
    settings: {
      client: "postgres",
      host,
      port,
      database,
      username: user,
      password,
      ssl: {
        rejectUnauthorized: false,
      },
    },
    options: {
      ssl: false,
    },
  };
};
