document.querySelector("form").addEventListener("submit",(event)=>{
    event.preventDefault();

    const dob = document.getElementById("DOB").value;
    const curDate = document.getElementById("CurrentDate").value;


    let curYear = curDate.split("-");
        console.log(curYear);
        
    )
})