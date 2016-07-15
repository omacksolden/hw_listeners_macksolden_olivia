var heading = document.getElementById('heading');

heading.addEventListener('click', function () {
    heading.className = 'teal';
});

var theImage = document.images[0];

theImage.addEventListener('dblclick', function () {
    theImage.className = 'invert';
});


theImage.removeEventListener('dblclick', function () {
    theImage.className = 'invert';
});
