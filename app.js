// for(i = 0; i <= 1000; i++) {
//     console.log(i);
// }

const parent = document.getElementById('parent');
const enfant = document.getElementById('enfant');

// console.log(enfant.parentNode);
// parent.removeChild(enfant);
// console.log(enfant.parentNode);

// const nouveauBouton = document.createElement("button");

// var p = document.createElement("p");
// document.body.appendChild(p);

const div = document.querySelector('h1');

// console.log(div);

console.log(div.innerHTML);
div.innerHTML = 'Hello';
console.log(div.innerHTML);