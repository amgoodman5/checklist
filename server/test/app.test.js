const knex = require('../db/knex');
const request = require('supertest');

const expect = require('chai').expect;
const app = require('../app');
const fixtures = require('./fixtures');
console.log(fixtures.lists)

describe('Cruddddd', function(){
  before((done) => {
    knex.migrate.latest()
      .then(()=>{
        return knex.seed.run();
      }).then(()=> done());
    });

    it('list all records', (done)=> {
      request(app)
       .get('/api/v1/list')
       .set('Accept', 'application/json')
       .expect('Content-Type', /json/)
       .expect(200)
       .then((response) => {
        //  console.log("response",response.body, "fixture", fixtures)

            expect(response.body).to.be.a('array');
            expect(response.body).to.deep.equal(fixtures.lists)
            done()
        })
         .catch(console.error);
  });

   it('list one', (done)=> {
    request(app)
     .get('/api/v1/list/1')
     .set('Accept', 'application/json')
     .expect('Content-Type', /json/)
     .expect(200)
     .then((response) => {
     console.log("response",response.body, "fixture", fixtures)
          expect(response.body).to.be.a('object');
          expect(response.body).to.deep.equal(fixtures.lists[0])
          done()
      })
       .catch(console.error);
});


it('Creates a record', (done) => {
  request(app)
    .post('/api/v1/list')
    .send(fixtures.singleList)
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200)
    .then((response) => {
      console.log(response.body)
      expect(response.body).to.be.a('object');
      fixtures.singleList.id = response.body.id;
      expect(response.body).to.deep.equal(fixtures.singleList);
      done()
    })
     .catch(console.error);
});

it('Updates a record', (done) => {
  fixtures.singleList.priority = 10;
  request(app)
    .put('/api/v1/list/15')
    .send(fixtures.singleList)
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200)
    .then((response) => {
      console.log(response.body)
      fixtures.singleList.id = response.body.id;
      expect(response.body).to.eql({});
      expect(response.body).to.deep.equal(fixtures.singleList);
      done()
    })
     .catch(console.error);
});







//when I use queries .get all books can it pull it out of a database

//unit tests if i put this into a function

//write your acceptence test first

//skip integration

//everytime you write a function write a unit tests

// Developer testing

//testing devleoper testing knowledge wiki  kyle coberly Devoper testing wik knowledge

//test api mother brain...github triple loop testing test



// it('list one', (done)=> {
//   request(app)
//    .get('/api/v1/list/1')
//    .set('Accept', 'application/json')
//    .expect('Content-Type', /json/)
//    .expect(200)
//    .then((response) => {
//      console.log("response",response.body, "fixture", fixtures)
//
//         expect(response.body).to.be.a('object');
//         expect(response.body).to.deep.equal(fixtures.lists[0])
//         done()
//     })
//      .catch(console.error);
// });

});
