document.getElementById("clrpicker").addEventListener("input",()=>{
    let clr=document.getElementById("clrpicker").value;
    document.body.style.backgroundColor=clr;
    document.getElementById("box").value=clr;
})