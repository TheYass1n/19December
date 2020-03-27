
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