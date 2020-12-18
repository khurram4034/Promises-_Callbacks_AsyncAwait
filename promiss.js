// Resolved Promiss Function //

let q = new Promise((resolve, reject)=>{
    let a = 1+1;
    if(a = 2){
        resolve('Succeded');
    }
    else{
        reject('Failed');
    }
})
q.then((message)=>{
    console.log('Its resolved and ' + message)
})
.catch((message)=>{
    console.log('Its Failed and ' + message)
});

   

// Rejected Promiss Function //

let r = new Promise((resolve, reject)=>{
    let b = 1+2;
    if(b == 2){
        resolve('Succeded')
    }
    else{
        reject('Failed')
    }
});

r.then((message)=>{
    console.log('Its Resolve and ' + message)
})
.catch((message)=>{
    console.log('Its Rejacted and ' + message)
})
