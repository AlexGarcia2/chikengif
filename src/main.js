import { Dino } from './../src/dino';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';


$(document).ready(function() {

  let dinoobject = new Dino();
  let promise = dinoobject.getGiffy();
  // console.log("promise", promise);
  // promise.then(function(result) {
  //   console.log("result", result);

  promise.then(function(response) {
    let body = JSON.parse(response);
    let selectedGIF = body.data[0].embed_url;
    $("#displayGIF").append(`<iframe src="${selectedGIF}" width="480" height="327" frameBorder="0" allowFullScreen></iframe>`);
  }, function(error){
    $(".error").text(`There is an error processing your request : ${error.message}`);
  });
});
