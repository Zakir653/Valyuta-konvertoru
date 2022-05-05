class Currency {
  constructor(firstCurrency, secondCurrency) {
    this.firstCurrency = firstCurrency;
    this.secondCurrency = secondCurrency;
    this.url = "https://api.exchangerate.host/latest?base=";
    this.amount = null;
    this.outputFirst = document.getElementById("outputFirst");
    this.outputSecond = document.getElementById("outputSecond");
  }
  exchange() {
    //  https://api.exchangerate.host/latest?base=USD&symbols=RUB
    return new Promise((resolve, reject) => {
      fetch(this.url + this.firstCurrency + "&symbols=" + this.secondCurrency)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
          const parity = data.rates[this.secondCurrency];
          if (this.firstCurrency !== this.secondCurrency) {        
            this.outputFirst.textContent = `1 ${this.firstCurrency} = ${parity.toFixed(4)} ${this.secondCurrency}`;
            this.outputSecond.textContent = `1 ${this.secondCurrency} = ${Number( 1 / parity
            ).toFixed(4)} ${this.firstCurrency}`;
            //  console.log(data)
            const amount2 = Number(this.amount);
            let total = Number(parity * amount2).toFixed(4);
            
            resolve(total);
          } else {
            this.outputFirst.textContent =
              "Eyni dəyərləri çevirmək mümkün deyil";
            this.outputSecond.textContent =
              "Eyni dəyərləri çevirmək mümkün deyil";
              alertify.alert('Səhifə Error', 'Eyni dəyərləri çevirməyə ehtiyac yoxdur');
amountElement.value=""
     
            ui.outputResult.value = "";
          }
        })
        .catch((err) => reject(err));
    });
  }
  changeAmount(amount) {
    this.amount = amount;
  }
  changeFirstCurrency(newFirstCurrency) {
    this.firstCurrency = newFirstCurrency;
    return newFirstCurrency;
  }
  changeSecondCurrency(newSecondCurrency) {
    this.secondCurrency = newSecondCurrency;
  }
}



