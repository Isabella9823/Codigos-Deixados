//barra
function myFunction() {
    var x = document.getElementById("barrinha");
    if (x.className === "barra") {
      x.className += " responsive";
    } else {
      x.className = "barra";
    }
  }
  
  //radapé
  function topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }