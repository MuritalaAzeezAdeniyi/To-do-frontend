form = document.querySelector("form")

form.addEventListener('submit', async(e) => {
    e.preventDefault()
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    try{
        const response = await fetch('http://localhost:8080/login', {
                method : "POST",
                headers : {"content-type" : "application/json"},
                body:JSON.stringify({email:email, password:password})
        });

        if(response.ok) {
            console.log("Success", await response.json())
        }else{
            console.log(response)
        }
    }catch(error){
        console.log(error)
    }

})