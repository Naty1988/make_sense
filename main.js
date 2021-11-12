const myProfileForm = document.querySelector('div.formularioDatos');


const button = document.createElement('button');
const myButton = myProfileForm.appendChild(button)
myButton.style.height = "100px"
myButton.style.width = "100px"

myButton.addEventListener('click', () => {
    const formName = document.querySelector("input[name='nombre']").value;
    const formLastName = document.querySelector("input[name='apellido']").value;
    const formEmail = document.querySelector("input[name='email']").value;
    const formMedia = document.querySelector("input[name='redes']").value;

    const formData = {
        firstName: formName,
        lastName: formLastName,
        email: formEmail,
        socialMedia: formMedia
    }

    fetch('http://localhost:5000/companies', {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData)
    }).then(response => response.json())

    console.log(formData);
})

// console.log("script here")

// function onSignIn(googleUser) {
//     let profile = googleUser.getBasicProfile();
//     console.log(profile);
// }