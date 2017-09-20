const lists = require('../test/fixtures').lists
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "list"; ALTER SEQUENCE list_id_seq RESTART WITH 15;')
    .then(function () {
      // Inserts seed entries
      return knex('list').insert(lists);
      });
};


// https://protected-badlands-23797.herokuapp.com/ | https://git.heroku.com/protected-badlands-23797.git
// https://young-spire-83983.herokuapp.com/ | https://git.heroku.com/young-spire-83983.git
