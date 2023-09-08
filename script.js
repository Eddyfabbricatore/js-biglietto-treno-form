const inputName = document.getElementById('inputText1');
const inputKm = document.getElementById('inputText2');
const inputAge = document.getElementById('selectAge');
const containerActive = document.querySelector('.container-active');

// bottoni
const bottone1 = document.getElementById('btn-1');
const bottone2 = document.getElementById('btn-2');

// colonne
let col1 = document.getElementById('col-1');
let col2 = document.getElementById('col-2');
let col3 = document.getElementById('col-3');
let col4 = document.getElementById('col-4');
let col5 = document.getElementById('col-5');

const priceXKm = 0.21;
let price = inputKm.value * priceXKm;
let discountYoung = 20;
let discountSenior = 40;
let priceDiscount;

bottone1.addEventListener('click', function(){
  containerActive.classList.add('active');

  priceDiscount = price;

  col1.innerHTML += inputName.value;

  if(inputAge.value == 'Minorenne'){
    col2.innerHTML += 'Biglietto minorenne';

    priceDiscount *= 1 - (discountYoung/100);
    col5.innerHTML += priceDiscount.toFixed(2);
  }else if(inputAge.value == 'Maggiorenne'){
    col2.innerHTML += 'Biglietto standard';

    col5.innerHTML += priceDiscount.toFixed(2);
  }else if(inputAge.value == 'Over 65'){
    col2.innerHTML += 'Biglietto over 65';

    priceDiscount *= 1 - (discountSenior/100);
    col5.innerHTML += priceDiscount.toFixed(2);
  }

  col3.innerHTML += Math.floor(Math.random() * 10) + 1;

  col4.innerHTML += Math.floor(Math.random() * 10000) + 1;
});

bottone2.addEventListener('click', function(){
  containerActive.classList.remove('active');

  col1.innerHTML = `<h2>NOME PASSEGERO</h2>`;
  col2.innerHTML = `<h3>Offerta</h3>`;
  col3.innerHTML = `<h3>Carrozza</h3>`;
  col4.innerHTML = `<h3>Codice CP</h3>`;
  col5.innerHTML = `<h3>Costo biglietto</h3>`;
});