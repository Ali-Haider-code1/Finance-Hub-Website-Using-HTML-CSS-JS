




// For Writing Name 
const name = "Ali Haider";
const signatureElement = document.getElementById("signature");

function writeName(name) {
  let index = 0;
  // Setinterval Run After each 2ms 
  const interval = setInterval(() => {
    signatureElement.textContent += name[index];
    // Increment in Index
    index++;
// If name length is complete
    if (index === name.length) {
      // Than clear the Interval which is running.
      clearInterval(interval);
    }
  }, 200); 

}
// Function Calling
writeName(name);


  // Number On Service Page
  function services(id, start, end, duration) {
    var range = end - start;
    var current = start;
    var increment = end > start ? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var obj = document.getElementById(id);
    var timer = setInterval(function () {
      current += increment;
      obj.textContent = current+"+";
      if (current == end) {
        clearInterval(timer);
      }
    }, stepTime);
  }
  services('HC', 0, 24, 2000); 
  services('ET', 0, 27, 2000); 
  services('AW', 0, 17, 2000); 
  services('PR', 0, 154, 2000); 

// For line under the navbar items
  var currentLocation = location.href;
  var navLinks = document.querySelectorAll(".navbar a");

  for (var i = 0; i < navLinks.length; i++) {
    if (navLinks[i].href === currentLocation) {
      navLinks[i].className += " active";
      break;
    }
  }


// Load button event listener on Blog Page
  document.getElementById("loadbutton").addEventListener("click", function() {
    var sliderContainer = document.getElementById("sliderContainer");
    sliderContainer.style.display = "block";
    
  var loadButton = document.getElementById("loadbutton");
  loadButton.style.display = "none";
  });


// For Scrolling button
  function ScrollTop() {
    window.scrollTo(0,0);
  }

