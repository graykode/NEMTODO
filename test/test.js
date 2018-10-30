var app = require('../app');
var request = require('supertest');
var expect = require('expect.js');

describe('POST /add', function(){
    it('respond tasks json', function(done){
        request(app)
            .post('/add')
            .send('title=운동하기&description=수영 왕복 1km&priority=1')
            .expect(302)
            .end(function(err, res) {
                if(err) throw err;

                done();
            });
    });
    it('respond tasks json', function(done){
        request(app)
            .post('/add')
            .send('title=공부&description=알고리즘 공부&priority=2&deadline=10/22/2018 12:00 AM')
            .expect(302)
            .end(function(err, res) {
                if(err) throw err;

                done();
            });
    });
    it('respond tasks json', function(done){
        request(app)
            .post('/add')
            .send('title=운동하기&description=농구 30분&priority=3')
            .expect(302)
            .end(function(err, res) {
                if(err) throw err;

                done();
            });
    });
});
