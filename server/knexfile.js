
module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/checklist'
  },
  test: {
    client: 'pg',
    connection: 'test-postgres://localhost/checklist'
  },
   production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true'
  }

};
