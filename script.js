const currency_1 = document.getElementById('currency_1');
const input_1 = document.getElementById('input_1');
const currency_2 = document.getElementById('currency_2');
const input_2 = document.getElementById('input_2');

const swap = document.getElementById('swap');
const rate = document.getElementById('rate');

function calculate(){
    const currency_one = currency_1.value;
    const currency_two = currency_2.value;
    fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
    .then( (res) => res.json() )
    .then( data => {
        const rate_of = data.rates[currency_two];
        rate.innerText = ` 1 ${currency_one} = ${rate_of} ${currency_two}`;
        input_2.value = ( input_1.value * rate_of ).toFixed(3);
    } )
}

function swapFunc(){
    const temp = currency_1.value;
    currency_1.value = currency_2.value;
    currency_2.value = temp;
    calculate();
}

currency_1.addEventListener('change',calculate);
input_1.addEventListener('input',calculate);
currency_2.addEventListener('change',calculate);
input_2.addEventListener('input',calculate);
swap.addEventListener('click',swapFunc);

calculate();