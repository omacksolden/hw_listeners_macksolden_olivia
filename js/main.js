var heading = document.getElementById('heading');

heading.addEventListener('click', function () {
    var myElement = document.createElement('article');
    myElement.innerHTML = '<p>This is click number x</p>';
    document.getElementsByClassName('container')[0].appendChild(myElement);
});

//
// function modifyHTML() {
//  var heading = document.getElementById( 'heading' );
//  heading.innerHTML = 'This is click number x!';
// }
//
// search addEventListener("click", function modifyHTML() {
// 	var heading = document.getElementById( 'firstHeading' );
// 	heading.innerHTML = 'This is click number x!';
// });
