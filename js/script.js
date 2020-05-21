// Buttons Variables
var btnGenerate = document.getElementById('generate');
var btnDelete = document.getElementById('delete');

// Form Variables
var formName = document.getElementById('form-name');
var formDistance = document.getElementById('form-distance');
var formAge = document.getElementById('form-age');

// Ticket Variables
var ticket = document.getElementById('ticket');

var ticketName = document.getElementById('ticket-name');
var ticketOffer = document.getElementById('ticket-offer');
var ticketCouch = document.getElementById('ticket-couch');
var ticketCode = document.getElementById('ticket-code');
var ticketCost = document.getElementById('ticket-cost');

// BUTTON EVENTS //

// Button Generate Function
btnGenerate.addEventListener('click',
  function() {

  // Price Variables
  var distance = formDistance.value;
  var price = distance * 0.21;
  var offer = "Prezzo Standard";
  console.log(distance);

  ageValue = formAge.value

  // Price Calculation
  if (ageValue == 'minorenne') {
    var price = price - (price * 0.2);
    var offer = "Sconto Young"
  } else if (ageValue == 'senior') {
    var price = price - (price * 0.4);
    var offer = "Sconto Senior"
  }

  // HTML Overwrite
  ticketName.innerHTML = formName.value;
  ticketOffer.innerHTML = offer;
  ticketCost.innerHTML = price.toFixed(2) + "€";

  // Display Ticket
  ticket.className = "container visible"
  }
);

// Button Delete Function
btnDelete.addEventListener('click',
  function() {

  // Reset Elements
  formName.value = '';
  formDistance.value = '';
  formAge.value = 'minorenne';


  // Hide Ticket
  ticket.className = "container hidden"
  }
);
