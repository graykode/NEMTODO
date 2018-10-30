var app = require('./app');
var request = require('supertest');
var expect = require('expect.js');

describe('GET /users', function(){
    it('respond users json', function(done){
        request(app)
            .get('/')
            .expect(200)
            .end(function(err, res) {
                if(err) throw err;

                expect(res.body).to.be.an(Array);
                done();
            });
    });
});