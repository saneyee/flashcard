$(document).ready(function() {

  $("li.one").click(function() {
    showhide(".des-one");

  });

  $("li.two").click(function() {
    showhide(".des-two");

  });
  $("li.three").click(function() {
    showhide(".des-three");

  });
  $("li.four").click(function() {
    showhide(".des-four");

  });
  $("li.five").click(function() {
    showhide(".des-five");
    

  });
  function showhide(className) {
   $(".desc-items div").addClass("hidden");
   $(className).removeClass("hidden");
  }





});
