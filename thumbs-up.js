var color= true;

function like() {
    if (color == true) {
        document.getElementById("like-btn").style.backgroundColor ='lightgrey';
        color = false;
        return;
    }
    document.getElementById("like-btn").style.backgroundColor ='white';
    color = true;
}