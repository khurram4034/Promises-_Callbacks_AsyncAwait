console.log('Start Group');

function breakfast() {
    setTimeout(function(){
        console.log("Breakfast Complete")
    }, 1000)
}

function morning() {
    console.log('Breakfast Start')
    breakfast()
}

morning();

console.log('End Group')