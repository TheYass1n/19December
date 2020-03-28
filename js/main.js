
        // to open and close nav 
        function openNav() {
           let nav = document.getElementById('nav-items');
            if (nav.style.display === "none") {
             nav.style.display = " flex";
             //document.body.style.backgroundColor = "rgba(0,0,0,0.4)";


           } else {
             nav.style.display = "none";
             //document.body.style.backgroundColor = "";

           }
         }    
         openNav()

         ///////////////
     const seachOverly = document.querySelector(".overly-search-contener");
     const seachBox = document.querySelector(".searchbox");

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

