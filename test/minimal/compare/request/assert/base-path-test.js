'use strict';
var chai = require('chai');
var request = require('request');
var assert = chai.assert;

require('dotenv').load();

describe('/', function() {
  describe('get', function() {
    it('should respond with 200 OK', function(done) {
      request({
        url: 'http://localhost:10010/',
        json: true,
        qs: {
          accessToken: process.env.KEY
        },
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      },
      function(error, res, body) {
        if (error) return done(error);

        assert.equal(res.statusCode, 200);

        assert.isNull(body); // non-json response or no schema
        done();
      });
    });

  });

  describe('head', function() {
    it('should respond with 200 OK', function(done) {
      request({
        url: 'http://localhost:10010/',
        method: 'HEAD',
        headers: {
          'Content-Type': 'application/json',
          accessToken: process.env.KEY_2
        }
      },
      function(error, res) {
        if (error) return done(error);

        assert.equal(res.statusCode, 200);
        done();
      });
    });

  });

});
