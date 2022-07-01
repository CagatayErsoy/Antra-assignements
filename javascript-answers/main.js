function reverseNumber() {
    let number=document.getElementById("reverseNumber").value
    document.getElementById("reverseNumberResult").innerHTML=number.toString().split("").reverse().join("")
  

}