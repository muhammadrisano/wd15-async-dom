// menggunakan callback

// const penjumlahan = (val1, val2, callback)=>{
//     setTimeout(()=>{
//         const result = val1 + val2
//         callback(result)
//     }, 2000)
  
// }

// penjumlahan(10, 20, (val)=>{
//     const hasil = val
//     penjumlahan(hasil, 50, (val2)=>{
//         const hasil2 = val2
//         console.log(hasil2);
//     })
// })


const penjumlahan = (val1, val2)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(typeof(val1) !== 'number' || typeof(val2) !== 'number'){
                reject('parameter harus number')
            }
            const result = val1 + val2
            resolve(result)
        }, 2000)
    })
}

const hasil = penjumlahan(10, {})

hasil
.then((res)=>{
    console.log('then di jalankan');
    console.log(res);
})
.catch((err)=>{
    console.log('catch di jalankan');
    console.log(err);
})