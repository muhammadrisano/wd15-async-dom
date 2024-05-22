function sleep(ms, val) {
    let start = new Date().getTime(), expire = start + ms;
    while (new Date().getTime() < expire) { }
    console.log(val);
    return;
  }

// synchronous

// console.log('perintah 1');
// sleep(2000, 'perintah 2')
// console.log('perintah 3');



// asynchronous
console.log('perintah 1');

setTimeout(()=>{
    console.log('perintah 2');
}, 2000)

console.log('perintah 3');