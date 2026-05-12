function Submit() {
    
    const name = document.getElementById('fullname').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    if (/^[a-zA-Z]+$/.test(name))
        {
        console.log("valid name");
        console.log("name:", name);
        } else 
        {
            alert("only letters ");
        }
    
    console.log("name:", name);
    console.log("phone:", phone);
    console.log("email:", email);
  

    
    console.log("Form submitted! Check the console for details.");
}
