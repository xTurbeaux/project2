function validFormData(data){
    return true;
}

$(document).ready(function(){
    $(".login").click( function(event){
        event.preventDefault();
        let user ={
            username : $("#userEmail").val().trim(),
            password: $("#userPassword").val().trim(),
        };

        if(validFormData(user)){
            $.ajax({
                url: "/login",
                method: "POST",
                data: user
            }).then(results=>{
                console.log(results);
                window.location.replace(`/users/${results}`);
                if(results.statusCode !== 200){
                    console.log("Login Failed");
                    alert("User Login Failed. Invalid Credentials");
                }
            });
        }
    })
});