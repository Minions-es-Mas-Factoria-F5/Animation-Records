var color= true;

export function like() {
    if (color == true) {
        document.getElementById("like-btn").style.backgroundColor ='lightgrey';
        color = false;
        return;
    }
    document.getElementById("like-btn").style.backgroundColor ='white';
    color = true;
}