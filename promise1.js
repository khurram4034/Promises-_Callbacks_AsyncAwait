const anyFunction = () => {
    return Math.floor(Math.random() * 10) % 2 === 0 ? true : false;
};

const resolveFunction = () => console.log('Success');
const rejectFunction = () => console.log('Failure');


const result = new Promise((resolve, reject) => {
    setTimeout(() => (anyFunction()? resolve() : reject()), 2000);
});

result.then(resolveFunction).catch(rejectFunction);

console.log('Hellow World')


/// promise then tree //

let promise = new Promise(function(resolve, reject){
    setTimeout(function () {
        console.log('New Promise')
        resolve()
    }, 2000)
})

promise.then(function(){
    console.log('Promiss Resolve')
    return 2
})
.then(function(val){
    console.log(val)
    return val + 2
})

.then(function(val2){
    console.log(val2)

})

.catch(function(error){
    console.log('Error')
})