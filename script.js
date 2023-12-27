const Name = document.getElementById('inputName');
const Km = document.getElementById('inputKm');
const Age = document.getElementById('selectAge');
const ticket = document.querySelector('.ticket');
const btnCreate = document.getElementById('btnCreate');
const btnReset = document.getElementById('btnReset');
let colName = document.getElementById('colName');
let colType = document.getElementById('colType');
let colCarriage = document.getElementById('colCarriage');
let colCode = document.getElementById('colCode');
let colCost = document.getElementById('colCost');

const priceXKm = 0.21;
let price = Km.value * priceXKm;
let discountUnderage = 20;
let discountOld = 40;
let priceDiscount;

btnCreate.addEventListener('click', function(){
  reset();

  ticket.classList.remove('d-none');

  priceDiscount = price;

  colName.innerHTML += Name.value;

  if(Age.value == 'underage'){
    colType.innerHTML += 'Biglietto per minorenne';

    priceDiscount *= 1 - (discountUnderage/100);

    colCost.innerHTML += priceDiscount.toFixed(2);
  }else if(Age.value == 'adult'){
    colType.innerHTML += 'Biglietto standard';

    colCost.innerHTML += priceDiscount.toFixed(2);
  }else if(Age.value == 'old'){
    colType.innerHTML += 'Biglietto per anziano';

    priceDiscount *= 1 - (discountOld/100);

    colCost.innerHTML += priceDiscount.toFixed(2);
  }

  colCarriage.innerHTML += Math.floor(Math.random() * 10) + 1;

  colCode.innerHTML += Math.floor(Math.random() * 10000) + 1;
})

btnReset.addEventListener('click', reset);

function reset(){
  ticket.classList.add('d-none');

  colName.innerHTML = `<h4>Nome passegero</h4>`;
  colType.innerHTML = `<h4>Tipo biglietto</h4>`;
  colCarriage.innerHTML = `<h4>Carrozza</h4>`;
  colCode.innerHTML = `<h4>Codice CP</h4>`;
  colCost.innerHTML = `<h4>Costo biglietto</h4>`;
}