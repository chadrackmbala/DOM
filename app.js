// for(i = 0; i <= 1000; i++) {
//     console.log(i);
// }

const parent = document.getElementById('parent');
const enfant = document.getElementById('enfant');

parent.removeChild(enfant);
console.log(enfant.parentNode);