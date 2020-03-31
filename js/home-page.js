var slideIndex = 1;
        showSlides(slideIndex);
        
        function plusSlides(n) {
          showSlides(slideIndex += n);
        }
        
        function currentSlide(n) {
          showSlides(slideIndex = n);
        }
        
        function showSlides(n) {
          var i;
          var slides = document.getElementsByClassName("mySlides");
          var dots = document.getElementsByClassName("dot");
          if (n > slides.length) {slideIndex = 1}    
          if (n < 1) {slideIndex = slides.length}
          for (i = 0; i < slides.length; i++) {
              slides[i].style.display = "none";  
          }
          for (i = 0; i < dots.length; i++) {
              dots[i].className = dots[i].className.replace(" active", "");
          }
          slides[slideIndex-1].style.display = "block";  
          dots[slideIndex-1].className += " active";
        }



        // to open and close nav 
        function openNav() {
           let nav = document.getElementById('nav-items');
            if (nav.style.display === "none") {
             nav.style.display = " flex";
           } else {
             nav.style.display = "none";
           }
         }    
         openNav()


         //search overly
     const seachOverly = document.querySelector(".overly-search-contener");
     const seachBox = document.querySelector(".secnend");

     function openSearch(){
     //window.location.href = "search.html"
     seachBox.addEventListener("click", () => {
        seachOverly.classList.add("open-search-overly")
        document.querySelector(".overly-search-input").focus();
        
     })

     }

     function closeSearch(){
      seachOverly.classList.remove("open-search-overly")
     }



