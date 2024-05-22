const elH1 = document.getElementById('title')
// console.log(elH1);
// getElementById -> sebuah element


// console.log(document);


const elP = document.getElementsByClassName('content')
// console.log(elP);
// getElementsByClassName -> sebuah html collection



const elLi = document.getElementsByTagName('li')
// console.log(elLi[2]);
// getElementsByTagName -> sebuah html collection



const elH2 = document.querySelector('h2.sub-title')

// console.log(elH2);
// querySelector -> sebuah element



const kumlanElH2 = document.querySelectorAll('h2.sub-title')
console.log(kumlanElH2[1]);