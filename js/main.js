// assign variables
let audiosample = document.querySelectorAll('.audio-sample');
let albumcover = document.querySelectorAll('.album-cover');
let players = document.querySelectorAll('audio');



// function to hide all divs
function hideAll() {
  audiosample.forEach(function(el) {
    el.style.display = 'none';
  });
}

// run that function right away
hideAll();

// when any animal is clicked, make the suitable div appear
albumcover.forEach(function(el) {
  el.onclick = (e) => {
    // hide all the divs to ensure that only one will be open
    hideAll();
    players.forEach(function(el) {
            el.pause();
            el.currentTime = 0;
        });
    // here is a switch statement to handle opening the right div

    switch (e.target.getAttribute('id')) {
      case 'youngtaylor':
        document.querySelector('#fearless')
        	.style.display = 'block';
        break;
      case 'newtaylor':
        document.querySelector('#folklore')
        	.style.display = 'block';
        break;
      case 'taylor':
        document.querySelector('#ninteeneightynine')
        .style.display = 'block';
        break;
      case 'swift':
        document.querySelector('#reputation')
        .style.display = 'block';
        break;
    } // end of switch
    // switch does not need default for this

  } // end of function for clicking

}); // end of forEach()
