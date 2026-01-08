// async code



// function me(){
//     console.log('sarthakIsomer')
// }

// let mypromise = new Promise( (resolve , reject)=>{
//     setTimeout(me,10000);
//     resolve('Success')
// } )

let promise2 = new Promise((resolve, reject) => {
    success = true;
    if(success){
        console.log('yay');
        resolve('Done');
    }
    else{
        reject("500")
    };
})

// promise2.then((resolvedMsg) => {
//     console.log("then's 1st arg gets resolve msg => " + resolvedMsg)
// },(rejectMsg)=>{
//     console.log("then's 2nd arg get reject msg ,like the value passed in reject() of initial Promise => "+ rejectMsg)
// })

//testing catch

// promise2.catch((getsRejectedmsgOnly)=>{console.log("catch works like then()without the fulfillment handler => "+getsRejectedmsgOnly)})

// multiple then
// promise2.then((successMsg)=>{console.log("then no. 1 => " + successMsg) 
//     return 'Then 1 successful'
// }).then((successMsg)=>{console.log("then no. 2 => " + successMsg)
//     throw(0)
// }).then((state)=>{
//     if(state){
//         console.log('then 3 , should never run')
//     }
// },(state)=>{
//     if(!state){
//         console.log('Thats wt we talkin bout')
//     }
// })

promisen1 = new Promise((resolve, reject) => {
    setTimeout(resolve,2000,"resolve1")
})
promisen2 = new Promise((resolve, reject) => {
    setTimeout(reject,2000,"reject2")
})
promisen3 = new Promise((resolve, reject) => {
    setTimeout(resolve,2000,"resolve3")
})

Promise.all([promisen1,promisen2,promisen3]).then(()=>console.log("ALL RESOLVED")).catch((error)=>{console.error(error);})