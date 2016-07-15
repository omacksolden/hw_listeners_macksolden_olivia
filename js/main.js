var heading = document.getElementById('heading');

heading.addEventListener('click', function () {
    heading.className = 'teal';
});
// Listens for a click on the heading text
// Changes color to teal on click

var theImage = document.images[0];

theImage.addEventListener('dblclick', function () {
    theImage.className = 'invert';
});
// Listens for a double click on the image
// Inverts the colors of the image on double click

var search = document.getElementById('searchbar');

search.addEventListener('submit', function (e) {
    e.preventDefault();
    var myElement = document.createElement('section');
    myElement.innerHTML = 'Thank you for searching!';
    document.getElementsByClassName('top')[0].appendChild(myElement);
});
// Listens for the submit event
// Adds a thank you message when form is submitted
