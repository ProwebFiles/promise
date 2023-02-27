// Asynchronous JavaScript and XML

// console.log(1);
// console.log(4);
// setTimeout(() => {
//     console.log(5);
// }, 0);
// console.log(3);
// console.log(2);

// API - Application Programming Interface
// Rest api

// console.log("Ma'lumotlarni so'rash...");

// setTimeout(() => {
//     console.log("Ma'lumotlarni tayyorlash...");
//     const backendData = {
//         server: "aws",
//         port: 3000,
//         status: 200
//     }

//     setTimeout(() => {
//         backendData.modified = true
//         console.log("Olingan ma'lumotlar", backendData);
//     }, 2000);
// }, 2000);

// let p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Ma'lumotlarni tayyorlash...");
//         const backendData = {
//             server: "aws",
//             port: 3000,
//             status: 200
//         }
//         resolve(backendData) /* Promise end */
//     }, 2000);
// })

// p.then(data => {
//         // console.log('Promise resolved', data);
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 data.modified = true
//                 reject(data)
//             }, 2000);
//         })
//         // p2.then(clientData => {
//         //     console.log("Olingan ma'lumotlar", clientData);
//         // })
//     })
//     .then(clientData => {
//         console.log("Olingan ma'lumotlar", clientData);
//     })
//     .catch(error => {
//         console.error(error);
//     })
//     .finally(() => {
//         console.log("finally");
//     })

// try {
//     console.log(x);
// } catch (error) {
//     console.log(error);
// }

// console.log('asd');
// console.log('asd');
// console.log('asd');

// XMLHttpRequest va fetch

const url = "https://jsonplaceholder.typicode.com/photos"

// const xhr = new XMLHttpRequest()

// xhr.open("GET", url)
// xhr.responseType = "json"
// xhr.send()

// xhr.addEventListener('load', function () {
//     // console.log(xhr.status);
//     if (xhr.status) {
//         let data = xhr.response
//         // console.log(data);
//         for (let i = 0; i < data.length; i++) {
//             if (i < 15) {
//                 // console.log(data[i]);
//                 let div = document.createElement("div")
//                 div.innerHTML = `
//                 <h3>${data[i].title}</h3>
//                 <img src="${data[i].url}" alt="">
//                 `
//                 document.body.prepend(div)
//             }
//         }
//     }
// })

// const delay = ms => {
//     return new Promise(res => setTimeout(() => res(), ms))
// }

// delay(5000).then(() => {
//     console.log('5 sec');
// })

// delay(2000).then(() => {
//     console.log('2 sec');
// })

// Promise.all([delay(1000), delay(4000)]).then(() => {
//     console.log('All Promises');
// })

// Promise.race([delay(500), delay(1500), delay(5000)]).then(() => {
//     console.log("Race Promise");
// })

// Информационные 100 - 199
// Успешные 200 - 299
// Перенаправления 300 - 399
// Клиентские ошибки 400 - 499
// Серверные ошибки 500 - 599

// GET — получение ресурса (resurs olish)
// POST — создание ресурса (resurs yaratish)
// PUT — обновление ресурса (resurs yangilanishi)
// PATCH - обновление ресурса частично (resursni qisman yangilash)
// DELETE — удаление ресурса (resursni o'chirish)

fetch(url)
    .then(response => {
        if (response.ok) return response.json()
    })
    .then(data => {
        // console.log(data);
        for (let i = 0; i < data.length; i++) {
            if (i < 15) {
                // console.log(data[i]);
                let div = document.createElement("div")
                div.innerHTML = `
                <h3>${data[i].title}</h3>
                <img src="${data[i].url}" alt="">
                `
                document.body.prepend(div)
            }
        }
    })
    .catch(e => {
        console.error(e);
    })
    .finally(() => {})

    // async function fetchAsync() {
    //     try {
    //         let response = await fetch(url)
    //         let data = await response.json()
    //         // console.log(data);
    //     } catch (error) {
    //         console.log(error);
    //     } finally {
    //         console.log('asd');
    //     }
    // }
    
    // fetchAsync()