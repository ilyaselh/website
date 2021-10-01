var scrollpos = window.scrollY;
var header = document.querySelector(".navbar");


function add_class_on_scroll() {
    header.classList.remove("top")
    header.classList.add("scrolled");
}

function remove_class_on_scroll() {
    header.classList.remove("scrolled");
    header.classList.add("top")
}

window.addEventListener('scroll', function(){ 
    //Here you forgot to update the value
    scrollpos = window.scrollY;

    if(scrollpos > 10){
        add_class_on_scroll();
    }
    else {
        remove_class_on_scroll();
    }
    console.log(scrollpos);
});

// Get the container element
var btnContainer = document.getElementById("navbarSupportedContent");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("nav-link");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
