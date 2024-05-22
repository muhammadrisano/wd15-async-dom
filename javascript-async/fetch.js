// fetch('https://jsonplaceholder.typicode.com/users')
// .then((res)=>{
//    return res.json()
// })
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log('catch dijalankan');
//     console.log(err);
// })

const getDataUser = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/2");
    const data = await response.json();
    console.log(data);
    // data.map((item)=>{
    //     console.log(item.name);
    // })
  } catch (error) {
    console.log(error);
  }
};

getDataUser();
