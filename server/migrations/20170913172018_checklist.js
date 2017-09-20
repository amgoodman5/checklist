
exports.up = function(knex, Promise) {
  return knex.schema.createTable('list', (table)=>{
    table.increments();
    table.text('title')
    table.text('description')
    table.integer('priority')
    table.date('date')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('list');
};
