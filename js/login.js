/*
* file used in login.html 
* authentificate user
*/
document.body.onload = addSubmitEvent;

/**
 * add necessary event to login form
 */
function addSubmitEvent() {

    let form = document.querySelector('.login-form');

    form.addEventListener("submit", (e) => {
        
        e.preventDefault();

        // do form validation
        let formIsValid = validateForm();

        // do user authentication
        if (formIsValid == true) authenticateUser();

    });

    // give ids for demo purpose
    let idsElt = document.createElement('p')
    idsElt.classList.add('error')
    idsElt.setAttribute('style', 'border-color: #296907; color:#296907; background-color: #9fe67a; text-align: unset;')
    idsElt.innerHTML= 'Les identifiants sont : <br>E-mail : sophie.bluel@test.tld<br>Mot de passe : S0phie'
    form.parentElement.insertBefore(idsElt, form)

    
}

/**
 * Function which authentificate the user
 */
async function authenticateUser() {

    let userEmail = document.querySelector('input#email').value;
    let userPass = document.querySelector('input#password').value;

    /**
     * Disabled because it's a demonstration, there's no backend to fetch
     */
    /*
    const postData = JSON.stringify({
        "email": userEmail,
        "password": userPass
    })

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: postData
    };

    await fetch("http://localhost:5678/api/users/login", options)
        .then( (res) => {
            if (res.status == "200") {
                // save token and redirect
                saveTokenAndRedirect(res);

            } else if (res.status == "404") {
                showErrorElt("Erreur dans l’identifiant ou le mot de passe");
            } else {
                return Promise.reject(res.status)
            }
        })
        .catch( (error) => showErrorElt("Une erreur est survenue"));
    */
    /**
     * for demonstration purpose
     * we save a false token
     * or treat errors like a promise rejection or a 404
     */
    let demoToken = "azerty"
    if (userEmail == "sophie.bluel@test.tld" && userPass == "S0phie") demoSaveTokenAndRedirect( demoToken )
    // 404
    else if (userEmail != "sophie.bluel@test.tld" || password != "S0phie" ) showErrorElt("Erreur dans l’identifiant ou le mot de passe");
    // rejection
    else {
        showErrorElt("Une erreur est survenue");
    }


}

/**
 * show an error message before the form
 * @param {String}
 */
function showErrorElt(reason) {

    if (document.querySelector('.error')) document.querySelector('.error').remove();

    let formSection = document.getElementById('login-section');
    let form = document.getElementById('login-form');

    let errorElt = document.createElement('p');
    errorElt.classList.add('error');
    errorElt.appendChild(document.createTextNode(reason));

    formSection.insertBefore(errorElt, form);

}

/**
 * function for basic form validation
 */
function validateForm() {

    let formInputs = document.querySelectorAll('form#login-form>label>input');
    var valid = true;
    for (let input of formInputs) {
        valid &= input.reportValidity();
        if (!valid) {break;}
    };
    if (valid) return true;

}

/**
 * Save token in localStorage
 * and redirect to front
 * @param {Response} res the response
 */
async function saveTokenAndRedirect(res) {

    res = await res.json();

    const token = res.token;

    sessionStorage.setItem('token', token);

    // redirect to front
    window.location.href = "index.html";
}

async function demoSaveTokenAndRedirect(token) {
    sessionStorage.setItem('token', token);

    // redirect to front
    window.location.href = "index.html";

}