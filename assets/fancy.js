//HOME PAGE JAVA//
$(document).ready(function(){
  $("#projs").delay(1000).fadeIn(500);

    $("#look").click(function(){
      $("#look").fadeOut(700);
      $(".textbub").fadeIn(750);
    });

    $(".otters").click(function(){
      $("#otters").fadeIn();
    });

  });


  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }  