
let getForm = document.querySelector("#signupForm");
const getAllInputs = document.querySelectorAll("#signupForm input")

// creating an object for for each input and its regex
const regPatterns = {
    username: /^[A-Z][a-z\d]{4,12}$/,
    email: /^([a-z\d-_]+)@([a-z-\.]+)\.([a-z]{2,9})([\.[a-z]{2,8})?$/,
    password: /^[\w~!@#$%^&*()-+=]{8,20}$/,
    telephone: /^[0][7-9][0]\d{8}$/
    //profile:
}

let validate = function (field, regex) {
    //console.log(regex.test(fieldValue));
    if (regex.test(field.value)) {
        field.className = "valid"
    } else {
        field.className = "invalid"
    }
    
}


getAllInputs.forEach((inputs) => {
    inputs.addEventListener('input', (e) => {
        let regPatternsKey = e.target.attributes.name.value;
        validate(e.target, regPatterns[regPatternsKey])
    })
})