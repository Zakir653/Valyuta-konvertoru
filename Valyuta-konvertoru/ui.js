const btn = document.querySelectorAll("#firstCurrency > button");
const btn1 = document.querySelectorAll("#secondCurrency > button");
const div = document.querySelector("#firstCurrency > .purple");
const div2 = document.querySelector("#secondCurrency > .purple");

btn.forEach((item) => {
  item.style.backgroundColor = "white";
  item.addEventListener("click", (e) => {
    div.classList.remove("purple");
    if (e.target.style.backgroundColor == "white") {
      btn.forEach((item) => {
        item.style.backgroundColor = "white";
        item.style.color = "#e5e5e5";
      });
      e.target.style.backgroundColor = "#833AE0";
      e.target.style.color = "white";
    } 
  });
});
btn1.forEach((item) => {
  item.style.backgroundColor = "white";
  item.addEventListener("click", (e) => {
    div2.classList.remove("purple");
    if (e.target.style.backgroundColor == "white") {
      btn1.forEach((item) => {
        item.style.backgroundColor = "white";
        item.style.color = "#e5e5e5";
      });
      e.target.style.backgroundColor = "#833AE0";
      e.target.style.color = "white";
    } 
  });
});

class UI {
  constructor() {
    this.outputResult = document.getElementById("outputResult");
  }
  displayResult(result) {
  
    if(isNaN(currency.amount)){
     this.outputResult.value=""
    amountElement.value=""
    alertify.alert('Səhifə Error', 'ədəd daxil edin');
  
    }
    else{ 
    if(currency.amount === "" || currency.amount === null){
   
      this.outputResult.value= " " 
    }
    else{
      if(amountElement.value[0]== 0 || amountElement.value == ""){
        amountElement.value = ""
        ui.outputResult.value=""
      }
      else{ 
    this.outputResult.value = Number(result).toFixed(4);} }
  }} 
}





