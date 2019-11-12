window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}


function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


$(function() {
    
    $("#Feedback").validate({
        
        rules: {
            name: "required",
            email: {
                required: true,
                email: true
            },
            message: "required",
        },
        
        messages: {
            name: "Please enter your name",
            email: "Please enter a valid email address",
            message: "Please enter a message",
        },
        
        submitHandler: function(form) {
          
           $(".message").show();
           $(".message").fadeOut(4500);
        }
    });
  });
  
  function myFunction1() {
  var popup = document.getElementById("myPopup1");
  popup.classList.toggle("show");
}

function myFunction2() {
  var popup = document.getElementById("myPopup2");
  popup.classList.toggle("show");
}

function myFunction3() {
  var popup = document.getElementById("myPopup3");
  popup.classList.toggle("show");
}

function myFunction4() {
  var popup = document.getElementById("myPopup4");
  popup.classList.toggle("show");
}

function myFunction5() {
  var popup = document.getElementById("myPopup5");
  popup.classList.toggle("show");
}

function myFunction6() {
  var popup = document.getElementById("myPopup6");
  popup.classList.toggle("show");
}

function myFunction7() {
  var popup = document.getElementById("myPopup7");
  popup.classList.toggle("show");
}

function myFunction8() {
  var popup = document.getElementById("myPopup8");
  popup.classList.toggle("show");
}

function myFunction9() {
  var popup = document.getElementById("myPopup9");
  popup.classList.toggle("show");
}

function myFunction10() {
  var popup = document.getElementById("myPopup10");
  popup.classList.toggle("show");
}

function myFunction11() {
  var popup = document.getElementById("myPopup11");
  popup.classList.toggle("show");
}

function myFunction12() {
  var popup = document.getElementById("myPopup12");
  popup.classList.toggle("show");
}