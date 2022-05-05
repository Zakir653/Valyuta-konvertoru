const amountElement = document.getElementById("amount");
const firstSelect = document.querySelector("#firstCurrency");
const secondSelect = document.getElementById("secondCurrency");
const currency = new Currency("RUB", "USD");
const ui = new UI();
eventListener();
function eventListener() {
  amountElement.addEventListener("input", exchangeCurrency); 
  firstSelect.addEventListener("click", firstClick);
  secondSelect.addEventListener("click", secondClick);
  document.addEventListener("DOMContentLoaded",()=>{
    currency.exchange()
    .then((result) => {
      ui.displayResult(result);
    })
    .catch((err) => console.log(err));;
  })
}


function exchangeValue(){
  let replaced = amountElement.value.replace(",",".");
   amountElement.value=replaced;
let d=amountElement.value.replace(/\s/g, '').toLocaleString("fi-Fi").replace(",",".")
console.log(d)
let p=Number(d).toLocaleString("fi-Fi");
let m=Number(d.replace(/\s/g, ''));
amountElement.value=m

if(d.includes(".")){
  amountElement.value=d;
}
else{
  amountElement.value=p
}

currency.changeAmount(m);
}
function exchangeCurrency(e) {
exchangeValue()
//   let replaced = amountElement.value.replace(",",".");
//    amountElement.value=replaced;
//    console.log(replaced)
// let d=amountElement.value.replace(/\s/g, '').toLocaleString("fi-Fi").replace(",",".")
// console.log(d)
// let p=Number(d).toLocaleString("fi-Fi");
// let m=Number(d.replace(/\s/g, ''));
// amountElement.value=m
// console.log(p)
// console.log(m)

// if(d.includes(".")){
//   amountElement.value=d;
// }
// else{
//   amountElement.value=p
// }
  currency
    .exchange()
    .then((result) => {
      ui.displayResult(result);
    })
    .catch((err) => console.log(err));
}
function firstClick(e) {
  exchangeValue()
  //currency.changeAmount(amountElement.value.replace(",", "."));
  currency.changeFirstCurrency(e.target.textContent);
  currency
    .exchange()
    .then((result) => {
      ui.displayResult(result);
    })
    .catch((err) => console.log(err));
}
function secondClick(e) {
  exchangeValue()
 // currency.changeAmount(amountElement.value.replace(",", "."));
  currency.changeSecondCurrency(e.target.textContent);
  currency
    .exchange()
    .then((result) => {
      ui.displayResult(result);
    })
    .catch((err) => console.log(err));
}
