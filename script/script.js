var password = "redengineontop123";

function passcheck() {
    if(document.getElementById('pass1').value != password) {
        alert('Wrong Key, Try again')
        return false;
    }
    if(document.getElementById('pass1').value == password) {
        alert('Valid Key, Press OK to enter the site')
    }
}
