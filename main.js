//formdata code
document.querySelector('.js-submit').addEventListener('click', function (event) {
  event.preventDefault();
  
  event.target.disabled = true;
  const message = event.target.innerHTML;
  event.target.innerHTML = "Sending...";

  const inputs = document.querySelector('.form');
  console.log(inputs);
  const formData = new FormData(inputs);

  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {

      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
          const user = JSON.parse(xhr.responseText);
          if (user.errorCode === 500) {
              document.querySelector('.alert').innerHTML = "You messed up: " + user.message;
          } else {
              document.querySelector('.js-form').innerHTML = "Thanks you for your submission"
          }

      }
  }

  xhr.open('POST', '/register', true);
  xhr.send(formData);
  // was quite lost on what to do for the form...
});

//"Show More" toggle click code below
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "SHOW MORE >"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "SHOW LESS v"; 
    moreText.style.display = "inline";
  }

}

function myFunction2() {
var dots = document.getElementById("dots2");
var moreText = document.getElementById("more2");
var btnText = document.getElementById("myBtn2");

if (dots.style.display === "none") {
  dots.style.display = "inline";
  btnText.innerHTML = "SHOW MORE >"; 
  moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "SHOW LESS v"; 
    moreText.style.display = "inline";
  }

}

function myFunction3(){
var dots = document.getElementById("dots3");
var moreText = document.getElementById("more3");
var btnText = document.getElementById("myBtn3");

if (dots.style.display === "none") {
  dots.style.display = "inline";
  btnText.innerHTML = "SHOW MORE >"; 
  moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "SHOW LESS v"; 
    moreText.style.display = "inline";
  }

}