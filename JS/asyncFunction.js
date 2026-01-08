// async function smth(){
//     setTimeout(()=>{
//         console.log("3 secs done")
//     },3000)
// }

// smth()

// FETCH-API

// async function jsonplaceholderapi(){
//     let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     let data = await response.json()
//     console.log(response);
//     console.log("Data : "+data)
    
// }

// jsonplaceholderapi()

async function cat(){
    let response = await fetch("https://catfact.ninja/fact");
    let data = await response.json();
    data = data.fact
    console.log(data)
}

cat()