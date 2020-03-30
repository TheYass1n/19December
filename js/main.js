
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


  /************************************/
  /*************Dark Mode**************/
  /************************************/

  const toggleSwitch = document.querySelector('.switch input[type="checkbox"]');

   function switchTheme(e) {
      if (e.target.checked) {
          document.documentElement.setAttribute('data-theme', 'dark');
          localStorage.setItem('theme', 'dark');
      }
      else {
          document.documentElement.setAttribute('data-theme', 'light');
          localStorage.setItem('theme', 'light')
      }    
  } 

   toggleSwitch.addEventListener('change', switchTheme, false);


   const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}