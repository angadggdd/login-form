const loginsec = document.querySelector('.login-section')
const loginlink = document.querySelector('.login-link')
const registerlink = document.querySelector('.register-link')
registerlink.addEventListener('click', () => {
    loginsec.classList.add('active')
})
loginlink.addEventListener('click', () => {
    loginsec.classList.remove('active')
})

function myFun() {
    var name = document.getElementById("User_Name").value;
    if (name.lengh < 3) {
        document.getElementById("message").innerHTML = "**username must be 3character"
        return false;
    }

    if (name.lengh > 15) {
        document.getElementById("message").innerHTML = "**username must be 3character"
        return false;
    }
}

function myFun() {
    let a = document.getElementById("User_Name").value;
    let currect = /^[A-Za-z]+$/;
    if (a == "") {
        document.getElementById("Message").innerHTML = "**username mast be 3character";
        return false;
    }
    if (a.length < 3) {
        document.getElementById("Message").innerHTML = "**username mast be 3character";
        return false;
    }
    if (a.length > 15) {
        document.getElementById("Message").innerHTML = "**not allowed after 15character";
        return false;
    }
    if (a.match(currect))
        true;
    else {
        document.getElementById("Message").innerHTML = "**only alphabet are allowed";
        return false;
    }
}