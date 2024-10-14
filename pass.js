const passwordbox=document.getElementById("password")
const length=10;
const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase="abcdefghijklmnopqrstuvwxyz"
const number="0123456789"
const symbol="!@#$%^&*()?><:'"

const allchars=upperCase+lowerCase+number+symbol

 function createPassword(){
        let password=""
        password+=upperCase[Math.floor(Math.random()*upperCase.length)]
        password+=lowerCase[Math.floor(Math.random()*lowerCase.length)]
        password+=number[Math.floor(Math.random()*number.length)]
        password+=symbol[Math.floor(Math.random()*symbol.length)]

        while(length>password.length){
            password+=allchars[Math.floor(Math.random()*allchars.length)]
        }

        passwordbox.value=password
        setTimeout(()=>{
            passwordbox.value=" "
        },5000)
    }

    function copyPassword(){
        navigator.clipboard.writeText(passwordbox.value)
        .then(()=>{
            alert("Password copied to clipboard!")
            passwordbox.value=" "
        }).catch(err=>{
            console.error("Failed to copy:",err)
        })
    }



