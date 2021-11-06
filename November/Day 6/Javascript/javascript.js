function bmi(){
    var height = parseFloat(document.getElementById("h").value)
    var weight = parseFloat(document.getElementById("w").value)
    var bmi = weight/(height*height);
    var userbmi=document.getElementById("bmi_index")
    userbmi.textContent=bmi.toFixed(2);

}