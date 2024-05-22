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



const startApp = async()=>{
    try {
        console.log('perintah 1');
        const result = await penjumlahan(15, 16)
        console.log(result);
        console.log('perintah 3');
    } catch (error) {
        console.log(error);
    }
    finally{
        console.log('app selesai dijalankan');
    }
    
}

startApp()