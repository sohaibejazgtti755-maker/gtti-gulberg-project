let index = 0;
const images = document.querySelectorAll(".slider img");
function showNextImage() {
images[index].classList.remove("active");
index = (index + 1) % images.length; 
images[index].classList.add("active");
}
setInterval(showNextImage, 3000); 

 function toggleText() {
 let text = document.getElementById("text");
 if (text.style.display === "none") {
 text.style.display = "block";  // show
} else {
 text.style.display = "none";   
 }
  }

 
    
  