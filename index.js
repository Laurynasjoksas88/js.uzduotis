"use strict";
// pirma uzduotis
const pazymis = parseInt(prompt('iveskite pazymi: '));
switch (pazymis) {
    case 1:
        console.log('Neigiamas pazymis');
        break;
    case 2:
        console.log('Neigiamas pazymis');
        break;
    case 3:
        console.log('Neigiamas pazymis');
        break;
    case 4:
        console.log('Teigiamas, bet reikia pasistengti');
        break;
    case 5:
        console.log('Teigiamas, bet reikia pasistengti');
        break;
    case 6:
        console.log('Vidutiniskai, ar tikrai tau to gana?');
        break;
    case 7:
        console.log('Vidutiniskai, ar tikrai tau to gana?');
        break;
    case 8:
        console.log('Pagirk save!');
        break;
    case 9:
//         console.log('Pagirk save!');
//         break;
//     case 10:
//         console.log('Super!');
//     default:
//         console.log('Pateikta neteisinga reiksme')

}

// antra uzduotis

const menesis = (prompt('iveskite menesi: '));

switch(menesis) {
    case 'sausis':
         console.log('ziema'); 
         break;
    case 'vasaris':
         console.log('ziema');
          break;
    case 'kovas':
         console.log('pavasaris');
          break;
    case 'balandis':
         console.log('pavasaris');
          break;
    case 'geguze':
         console.log('pavasaris');
          break;
    case 'birzelis':
         console.log('vasara');
          break;
    case 'liepa':
        console.log('vasara');
         break;
    case 'rugpjutis':
         console.log('vasara');
          break;
    case 'rugsejis':
         console.log('ruduo');
          break;
    case 'spalis':
         console.log('ruduo'); 
         break;
    case 'lapkritis':
         console.log('ruduo');
          break;
    case 'gruodis':
         console.log('ziema');
          break;
    default:
        console.log('Nera tokio menesio')
}

// 3 uzduotis

const laikas = (prompt('iveskite laika: '));

switch(laikas) {
    case '1h': console.log('Labanakt!'); break;
    case '2h': console.log('Labanakt!'); break;
    case '3h': console.log('Labanakt!'); break;
    case '4h': console.log('Labanakt!'); break;
    case '5h': console.log('Labanakt!'); break;
    case '6h': console.log('Labas rytas!'); break;
    case '7h': console.log('Labas rytas!'); break;
    case '8h': console.log('Labas rytas!'); break;
    case '9h': console.log('Labas rytas!'); break;
    case '10h': console.log('Labas rytas!'); break;
    case '11h': console.log('Laba diena!'); break;
    case '12h': console.log('Laba diena!'); break;
    case '13h': console.log('Laba diena!'); break;
    case '14h': console.log('Laba diena!'); break;
    case '15h': console.log('Laba diena!'); break;
    case '16h': console.log('Laba diena!'); break;
    case '17h': console.log('Laba diena!'); break;
    case '18h': console.log('Labas vakaras!'); break;
    case '19h': console.log('Labas vakaras!'); break;
    case '20h': console.log('Labas vakaras!'); break;
    case '21h': console.log('Labas vakaras!'); break;
    case '22h': console.log('Labanakt!'); break;
    case '23h': console.log('Labanakt!'); break;
    case '24h': console.log('Labanakt!'); break;
}


// 4 uzduotis

const date = new Date();
const day = date.getDay();


// 6 uzduotis

const number = parseInt(prompt('iveskite numeri: '));

if (number > 0) {
    console.log('Teigiamas');
}

else if (number == 0) {
  console.log('Lygus nuliui');
}

else {
     console.log('Neigiamas');
}


// 9 uzduotis
const number = parseInt(prompt('iveskite numeri: '));

if (number > 50) {
    console.log(number);
}
if (number == 50) {
    console.log(number)
}

else  {
    console.log('ivestas skaicius mazesnis uz 50');
}

// 7 uzduotis

let isLoggedIn = true;
let userType = 'admin'
const userName = 'Tomas';

if (isLoggedIn) {
    if (userType === "admin") {
        console.log('Sveikas,admine!');
    } else {
        console.log(`Sveikas, ${userName}!`);  
    }
} else {
    console.log('Turi pirma prisijungti')
}

//  5 uzduotis

let b = 19
let turi = false
if (b>=18){
    if (turi) { 
    console.log('turi vairuotojo teises')

    } else (console.log('neturi vairuotoju teisiu'))

} 
else (console.log('per jaunas'))








