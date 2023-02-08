
 var AllProducts = document.querySelectorAll(".div-products .product")
 var div1 = document.querySelector("#content")
 var btn1 = document.querySelector(".btn1")
  var total = document.querySelector(".totalPrice")
 var totalPrice = 0;

 AllProducts.forEach( function (item) {
    item.onclick = function () {
        totalPrice +=   parseInt (item.getAttribute ("price")) 
        
        div1.innerHTML += item.textContent  + " <br /> " 
        total.innerHTML = totalPrice 
    }
 })

//////////////////////////////////////////////
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
