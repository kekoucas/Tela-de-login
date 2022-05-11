// email = document.querySelector("#email").value;
// password = document.querySelector("#pass").value;
let login = document.getElementById("login")
let signin = document.getElementById("signin")
let pass = document.getElementById("pass")
let email = document.getElementById("email")

let register = []

const logon = function () {
    register = JSON.parse(localStorage.getItem("register"))

    let emailValue = email.value
    let passValue = pass.value

    if(emailValue == "" || passValue == ""){
        alert("please enter a valid email and password")
    }else{
            let obj_register = {
            email: emailValue,
            pass: passValue
        }
        let  exists = register.filter(c => {
            return c.email == obj_register.email && c.pass == obj_register.pass
        })
        if(exists.length > 0){
            alert("login sucessfuly!")
        }else{
          alert("Your email or password it's wrong or isn't registered!")
        }
    }
}
 const verify_register = function () {
    register = JSON.parse(localStorage.getItem("register"))

    let emailValue = email.value
    let passValue = pass.value

    if(emailValue == "" || passValue == ""){
        alert("please enter a valid email and password")
    }
    else if(register == null) {
            register = []
            let obj_register = {
                email: emailValue, 
                pass: passValue
            }
            register.push(obj_register)
            localStorage.setItem("register", JSON.stringify(register))
            alert("email register sucessfuly")
    }else{
        let obj_register = {
                email: emailValue,
                pass: passValue
        }
        let exists = register.filter(c => {
            return c.email == obj_register.email
        })
        if(exists.length > 0){
            alert("email already in use")
        }else{
            register.push(obj_register)
            localStorage.setItem("register", JSON.stringify(register))
            alert("email register sucessfuly")
        }
    }
}
let btn = document.querySelector('.fa-eye')

btn.addEventListener('click', ()=>{
  let inputSenha = document.querySelector('#pass')
  
  if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type', 'text')
  } else {
    inputSenha.setAttribute('type', 'password')
  }
})

signin.onclick = verify_register
login.onclick = logon
