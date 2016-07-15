var heading = document.getElementById('heading');

heading.addEventListener('click', function () {
    var myElement = document.createElement('article');
    var x = 1;
    myElement.innerHTML = 'This is click number ' + x ;
    x++;
    document.getElementsByClassName('container')[0].appendChild(myElement);
});
