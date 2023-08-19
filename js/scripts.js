// User Interface Logic

function hideResultsAndError() {
  document.getElementById("error-message").setAttribute("class", "hidden");
  document.getElementById("page").setAttribute("class", "hidden");
  document.getElementById("chamalet").setAttribute("class", "hidden");
  document.getElementById("phelps").setAttribute("class", "hidden");
  document.getElementById("pitt").setAttribute("class", "hidden");
  document.getElementById("zendaya").setAttribute("class", "hidden");
  document.getElementById("pugh").setAttribute("class", "hidden");
  document.getElementById("blanchet").setAttribute("class", "hidden");
  document.getElementById("sorry").setAttribute("class", "hidden");
}

window.onload = function() {
  document.querySelector("form").onsubmit = function(event) {
    event.preventDefault();
    hideResultsAndError();
    const age = parseInt(document.querySelector("input#age").value);
    const sex = document.querySelector("input#sex").value;

    // with the logical not operator, we check for whether
    // age or height do NOT exist, and if they don't exist, 
    // then we display the error message
    if (!age || !sex) {
      document.getElementById("error-message").removeAttribute("class");
      // in all other cases, we run our code to see what ride a user can go on
    } else {
      if (sex === "o") {
      document.getElementById("page").removeAttribute("class");
      } else if (age <= 25 || sex === "m") {
      document.getElementById("chamalet").removeAttribute("class");
      } else if (age > 25 && age <= 35 || sex === "m") {
      document.getElementById("phelps").removeAttribute("class");
      } else if (age > 35 || sex === "m") {
      document.getElementById("pitt").removeAttribute("class");
      } else if (age <= 25 || sex === "f") {
      document.getElementById("zendaya").removeAttribute("class");
      } else if (age > 25 && age <= 35 || sex === "f") {
      document.getElementById("pugh").removeAttribute("class");
      } else if (age > 35 || sex === "f") {
      document.getElementById("blanchet").removeAttribute("class");
      } else {
      document.getElementById("sorry").removeAttribute("class");
      }
    };  
  }
}