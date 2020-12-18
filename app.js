let p = new Promise ((resolve,reject)=>{
    let a = 1+2;
    if(a == 2){
        resolve('Succeded')
    }
    else{
        reject('Failed')
    }
})

p.then((message)=>{
    console.log('Its Resolved and ' + message)
})
.catch((message)=>{
    console.log('Its rejected and ' + message)
})