/* jshint expr:true */
/* global describe, it */

'use strict';

var expect = require('chai').expect;
var Weather = require ('../../app/models/weather');

describe ('Weather', function (){
  describe ('constructor', function (){
  });
  describe ('#high', function (){
    it('should get the high temperature for today', function(done){
      Weather.high(37203, function(temp){
      
        expect(temp).to.be.ok;
        expect(temp.length).to.be.at.least(2);
        done();
      });
    });
  });
  describe ('#low', function (){
    it('should return the low temperature for today', function(done){
      Weather.low(37203, function(temp){

        expect(temp).to.be.ok;
        expect(temp.length).to.be.at.least(2);
        done();
      });
    });
  });
});
