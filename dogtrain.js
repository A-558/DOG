console.log('js start')
var first='';
var second='';
var dog='';
var emailId='';
var password='';

function login(){
    first = document.getElementById('name').value;
    second = document.getElementById('lname').value;
    dog = document.getElementById('typeofdog').value;
    emailId = document.getElementById('email').value;
    password = document.getElementById('pswd').value;
    if( first == 'akhil' && second == 'kumar' &&dog == 'lab' && emailId =='akhil@gmail.com' && password =='123456789'){
        document.getElementById('result').innerHTML = 'Successfully LogedIn';
        document.getElementById('result').style.color ='green';
        console.log('Successfully LogedIn');
        window.location.href='ARUN.html'
    }
    else{
            console.log('Invalid email/password');
            document.getElementById('result').style.color='red';
            document.getElementById('result').innerHTML = 'Invalid email/password';
    
        }
    return false;
}
console.log('js stop')