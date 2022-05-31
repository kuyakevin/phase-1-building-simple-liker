// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
//three pillars: manipulate the dom, recognize javascript events, response from the server 

modal.classList.add("hidden");
//Use .hidden to find the element with the id "modal" + global constants 

let likeButton = document.querySelector(".like .like-glyph"); //create a constant for the like button
//const likeButtons = likeButton.querySelectorAll(".like")
likeButton.addEventListener('click', () => { //event listener when the heart is clicked
  mimicServerCall() //callback function 
  .then(function(serverMessage) { //expect the anonymous function to be completed in the future
    alert(serverMessage) //display an alert message passing serverMessage as an argument 
    if(likeButton.innerHTML === EMPTY_HEART) {
      likeButton.innerHTML = FULL_HEART //change empty herat to full heart
    }else{
      likeButton.innerHTML = EMPTY_HEART //otherwise keep as an empty heart
    }
    likeButton.classList.toggle("activated-heart"); //change heart color to red
  })
    .catch(() => { //catch an error and provide a response  
      modal.classList.remove("hidden") 
      modal.innerHTML = "Unknown Server Error. Please Try Again." //remove hidden aspect of modal 
      setTimeout(() => { //make a timeout function so the error message can dissapear 
        modal.classList.add('hidden')
      }, 3000)
    })
  })






//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
