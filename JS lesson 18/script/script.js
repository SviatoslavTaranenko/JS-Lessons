/* let num = 12.345
console.log(num); */
/* let numRound = Math.round(num);
console.log(numRound); */ // Округляє

/* let numRound = Math.floor(num);
console.log(numRound); */   //Округляє в меншу сторону

/* let numRound = Math.ceil(num);
console.log(numRound); */  // Округляє в більшу сторону

/* let numRound = Math.round(num * 100) / 100;
console.log(numRound); */

/* console.log(Math.max(1, 3, 45));
console.log(Math.min(1, 3, 45)); */

/* console.log(Math.pow(3, 4));

let numRandom = Math.random(); */

/* for(let i = 0; i <= 100; i++) {
    console.log(Math.random());
} */

/* for(let i = 0; i <= 100; i++) {
    console.log(Math.random() * 200);
} */

/* for(let i = 0; i <= 100; i++) {
    let numRandom = Math.random() * 200;
    let numRandomRound = Math.round(numRandom);
    console.log(numRandomRound);
} */

for(let i = 40; i <= 100; i++) {
    let numRandom = 40 + Math.random() * 20;
    let numRandomRound = Math.round(numRandom);
    console.log(numRandomRound);
}