form = document.querySelector('form')

form.addEventListener('submit', async(e) => {
    e.preventDefault()
    const firstName = document.getElementsByClassName('.firstName').value
    const lastName = document.getElementsByClassName('.lastName').value
    const email = document.getElementsByClassName('.email').value
    const phoneNumber = document.getElementsByClassName('.phoneNumber').value
    const password = document.getElementsByClassName('.password').value

    try{
        const response = await fetch('http://localhost:8080/signUp', {
            method: "POST",
            headers :{ "content-type" : "application/json"},
            body: JSON.stringify({firstName:firstName, lastName:lastName, email:email, password:password, phoneNumber:phoneNumber})
        })

        if(response.ok){
            console.log("Success", await response.json())
        }else{
            console.log("Error has occurred")
        }
    }catch(error){
        console.log(error)
    }
})