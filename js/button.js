const backToTopButton = document.querySelector ('#button-top');

window.addEventListener("scroll", scrollFunction);

function scrollFunction () {
   if (window.pageYOffset > 300) { // Show back to top button
    if (!backToTopButton.classList.contains("btnEntrance")){
      backToTopButton.classList.remove ('btnExit');
      backToTopButton.classList.add ('btnEntrance');
      backToTopButton.style.display = "block";
    }
   }

   else { // Hide back to top button
    if (!backToTopButton.classList.contains("btnExit")){
      backToTopButton.classList.remove ('btnEntrance');
      backToTopButton.classList.add ('btnExit');
      setTimeout (function(){
        backToTopButton.style.display = "none";
      }, 250);
    }
   }
}

backToTopButton.addEventListener("click", backToTopBtn);

function backToTopBtn (){
  window.scrollTo(0, 0);
}

 