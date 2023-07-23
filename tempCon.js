function teCon() {
    const tempVal = document.getElementById("temp").value;
    const unit = document.getElementById("scale");
    const unitSel = unit.options[unit.selectedIndex].value;
    if (tempVal==="") {
      document.getElementById("result").innerHTML = "Enter a value.";
      return;
    }
    let convertedTemp;
    if (unitSel === "cel") {
      convertedTemp = ((tempVal * 9/5) + 32).toFixed(3);
      document.getElementById("result").innerHTML= convertedTemp + "&#8457;";
    } else if (unitSel === "fah") {
      convertedTemp = ((tempVal - 32) * 5/9).toFixed(3);
      document.getElementById("result").innerHTML= convertedTemp + "&#8451;";
    }
}