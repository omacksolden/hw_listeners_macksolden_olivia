var heading = document.getElementById('heading');
var x = 1;
heading.addEventListener('click', function () {
    var myElement = document.createElement('article');
    myElement.innerHTML = 'This is click number ' + x;
    x++;
    document.getElementsByClassName('container')[0].appendChild(myElement);
});
