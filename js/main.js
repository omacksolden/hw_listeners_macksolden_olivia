var form = document.getElementById('form');

var firstName = document.getElementById('firstName');
var lastName = document.getElementById('lastName');
var email = document.getElementById('email');
var message = document.getElementById('message');
form.addEventListener('submit', function (i) {
    i.preventDefault();
    console.log('The firstName is: ' + firstName.value);
    console.log('The lastName is: ' + lastName.value);
    console.log('The email is: ' + email.value);
    console.log('The message is: ' + message.value);
});
