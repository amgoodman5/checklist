const knex = require('./knex');//connection

 module.exports = {
 getAll(){
   return knex('list')
 },
 getOne(id){
   return knex('list').where('id', id).first()
 },
 create(list) {
   return knex('list').insert(list, '*')

 },
 update(id, list){
   return knex('list').where('id', id).update(list)
 },
 delete(id, list){
   return knex('list').where('id', id).del()
 }
}
