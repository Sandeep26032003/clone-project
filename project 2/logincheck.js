function login()
{
    
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username=="admin" && password=="admin")
    {
        location.assign("/Users/hemanthreddy/Documents/SEPM/project 2/logedinhomepage.html");
        flag=1;
        if(flag==1)
        {
            window.alert("login successfull");
        }
       
   } 
   else
       {
        window.alert("login failed");
       }
}
    