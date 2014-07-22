'use strict';

var request = require('request');

function Weather(){
}

Weather.high = function(zip, cb){
  var url = 'http://api.wunderground.com/api/a11890b19fe77087/forecast/q/' + zip + '.json';

  request(url, function(error, response, body){
    body = JSON.parse(body);
    var high = body.forecast.simpleforecast.forecastday[0].high.fahrenheit;
    var temp = high + 'F';
    cb(temp);
  });
};

Weather.low = function(zip, cb){
  var url = 'http://api.wunderground.com/api/a11890b19fe77087/forecast/q/' + zip + '.json';

  request(url, function(error, response, body){
    body = JSON.parse(body);
    var low = body.forecast.simpleforecast.forecastday[0].low.fahrenheit;
    var temp = low + 'F';
    cb(temp);
  });
};
<<<<<<< HEAD
=======

Weather.avgHigh = function(zip, cb){
  var url = 'http://api.wunderground.com/api/a11890b19fe77087/forecast10day/q/' + zip + '.json';
  request(url, function(error, response, body){
    body = JSON.parse(body);
    var avg = 0;
    var forecasts = body.forecast.simpleforecast.forecastday;

    for(var i = 0; i < forecasts.length; i++){
      avg += parseInt(forecasts[i].high.fahrenheit);
    }
    
    avg = avg / forecasts.length;
    cb(avg);
  });
};

Weather.avgLow = function(zip, cb){
  var url = 'http://api.wunderground.com/api/a11890b19fe77087/forecast10day/q/' + zip + '.json';
  request(url, function(error, response, body){
    body = JSON.parse(body);
    var avg = 0;
    var forecasts = body.forecast.simpleforecast.forecastday;

    for(var i = 0; i < forecasts.length; i++){
      avg += parseInt(forecasts[i].low.fahrenheit);
    }
    
    avg = avg / forecasts.length;
    cb(avg);
  });
};
Weather.highs = function(zip, cb){
  var url = 'http://api.wunderground.com/api/a11890b19fe77087/forecast10day/q/' + zip + '.json';
  request(url, function(error, response, body){
    body = JSON.parse(body);
    var highTemps = [];
    var forecasts = body.forecast.simpleforecast.forecastday;

    for(var i = 0; i < forecasts.length; i++){
      highTemps.push(parseInt(forecasts[i].high.fahrenheit));
    }
    cb(highTemps);
  });
};

Weather.lows = function(zip, cb){
 var url = 'http://api.wunderground.com/api/a11890b19fe77087/forecast10day/q/' + zip + '.json';
 request(url, function(error, response, body){
   body = JSON.parse(body);
   var lowTemps = [];
   var forecasts = body.forecast.simpleforecast.forecastday;

   for(var i = 0; i < forecasts.length; i++){
     lowTemps.push(parseInt(forecasts[i].low.fahrenheit));
   }
   cb(lowTemps);
 });
};

Weather.deltas = function(zip, cb){
  var url = 'http://api.wunderground.com/api/a11890b19fe77087/forecast10day/q/' + zip + '.json';

  request(url, function(error, response, body){

    body = JSON.parse(body);
    var temps = [];
    var forecasts = body.forecast.simpleforecast.forecastday;

    for(var i = 0; i < forecasts.length; i++){
     temps.push(parseInt(forecasts[i].high.fahrenheit) - parseInt(forecasts[i].low.fahrenheit));
    }
    cb(temps);
  });
};

>>>>>>> dev
module.exports = Weather;
