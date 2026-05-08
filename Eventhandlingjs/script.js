function BulbON ()
{
    document.getElementById("bulb1").style.backgroundColor = "yellow"
}

function BulbOFF()
{
    document.getElementById("bulb1").style.backgroundColor = "white"
}

function Bulbgreen()
{
    document.getElementById("bulb1").style.backgroundColor="green"
}
function Bulbred()
{
    document.getElementById("bulb1").style.backgroundColor="red"
}
function Bulbcyan()
{
    document.getElementById("bulb1").style.backgroundColor="cyan"
}

document.getElementById("bulbred1").addEventListener("click",Bulbred);


function ChangeBulbColour(){
    const color= document.getElementById("bulbcolor").value;
    document.getElementById("bulb1").style.backgroundColor= color;
}

document.getElementById("bulbcolor").addEventListener("change",ChangeBulbColour);



function changeheading(){
    const color= document.getElementById("Hc").value;
    document.getElementById("Headings").style.color= color;
}

document.getElementById("Hc").addEventListener("change",changeheading);


function changePara(){
    const color= document.getElementById("Pc").value;
    document.getElementById("Para").style.color= color;
}

document.getElementById("Pc").addEventListener("change",changePara);

function changebackground(){
    const color= document.getElementById("bg").value;
    document.getElementById("box1").style.backgroundColor= color;
}

document.getElementById("bg").addEventListener("change",changebackground);


function reset()
{
    window.location.reload();
}