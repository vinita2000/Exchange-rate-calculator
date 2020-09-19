//dom items
const currency1_element = document.getElementById('currency-one');
const currency2_element = document.getElementById('currency-two');
const amount1_element = document.getElementById('amount-one');
const amount2_element = document.getElementById('amount-two');
const currencyRate = document.getElementById('rate');
const swap = document.getElementById('swap');

//calculate echange rate 
function calculate(){
    const currency1 = currency1_element.value;
    const currency2 = currency2_element.value;
    
    fetch(`https://v6.exchangerate-api.com/v6/7bd39a826c94abd66b427efc/latest/${currency1}`)
    .then(res=> res.json())
    .then(function(data){
        //console.log(data);
        const rate = data.conversion_rates[currency2];
        
        currencyRate.innerText = `1 ${currency1} = ${rate} ${currency2}`;
        //update amount2
        amount2_element.value = (amount1_element.value * rate).toFixed(2);
    });
}

//swap currency
function swapCurrency(){
    var temp = currency1_element.value;
    currency1_element.value = currency2_element.value;
    currency2_element.value = temp;
}

currency1_element.addEventListener('change', calculate);
currency2_element.addEventListener('change', calculate);
amount1_element.addEventListener('input', calculate);
amount2_element.addEventListener('input', calculate);
swap.addEventListener('click', swapCurrency);