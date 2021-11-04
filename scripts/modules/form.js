
export function obtainForm() { 
    const submitBtn = document.getElementById('submit');
    var counter = 0;

    submitBtn.onclick = function obtainForm() {
        
        var nameVal = document.getElementById('formName').value;
        var emailVal = document.getElementById('formEmail').value;
        if ( nameVal !== null ) {
            localStorage.setItem("Name"+" "+counter, nameVal);
        }
        if ( emailVal !== null ) {
            localStorage.setItem("Email"+' '+counter, emailVal);
            counter++;
        }
    }
}