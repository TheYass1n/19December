var distToBottom, data, dataObj;
var page = 1;
var pollingForData = false;
var xhr = new XMLHttpRequest();
var contentContainer = document.getElementsByClassName('post')[0];
var loadingContainer = document.getElementsByClassName('loading-container')[0];

function getDistFromBottom () {
  
  var scrollPosition = window.pageYOffset;
  var windowSize     = window.innerHeight;
  var bodyHeight     = document.body.offsetHeight;

  return Math.max(bodyHeight - (scrollPosition + windowSize), 0);

}

xhr.onload = function() {
  if(xhr.status === 200) {

    pollingForData = false;
    data = xhr.responseText
    dataObj = JSON.parse(data);
    
    // for iterating through the data
    // Using a ForEach
    dataObj.array.forEach(addToDom)

    function addToDom(array, index) {

      var postElement = document.createElement('div')
          postElement.classList.add('events')

      var title = document.createElement('span');
          title.appendChild(document.createTextNode(array.date));
          title.classList.add('time');
      

  
      
      
      // since the text already comes out as this
      var desc = document.createElement('p');
          desc.innerHTML = array.content;
          desc.classList.add('content');
      
      

      postElement.appendChild(title);
      postElement.appendChild(desc);

      
      contentContainer.appendChild(postElement);




   };
 

    
// Using a For Loop
    for(var i = 0; i <= dataObj.array.length; i++ ) {
      console.log('data ', i);      
    }
    
   //removing the spinner
   loadingContainer.classList.remove('no-content');

  }
};

  
xhr.open('GET', 'https://raw.githubusercontent.com/YassinHussein/DecRevlotionHistory/master/data.json',true);
xhr.send();


document.addEventListener('scroll', function() {
        distToBottom = getDistFromBottom();

        if (!pollingForData && distToBottom > 0 && distToBottom <= 8888) {
          loadingContainer.classList.add('no-content');
          page++;
          xhr.open('GET', 'https://raw.githubusercontent.com/YassinHussein/DecRevlotionHistory/master/data.json ', true);
          xhr.send();

        }
});
