// Callbacks Function //

function watchSuitsCallback(callback, errorCallback){
    let userLeft = false;
    let useWatchingSuits = false;

    if(userLeft) {
        errorCallback({
            name: 'Episode Completed',
            message: 'Shit'
        })
    }
    else if (useWatchingSuits) {
        errorCallback({
            name: 'User Watching Suits',
            message: 'With Harvery'
        })
    }
    else {
        callback('Awesom')
    }
}
watchSuitsCallback(message => {
    console.log(message)
},
error => {
    console.log(error.name + ' ' + error.message)
});

// Example Callbacks Function  // 

///Example 1 //

function message(){
    alert("Please Login First ")
}

setTimeout(message, 2000)

///Example 2 //

function taskOne() {
    console.log('task 1');
}

function taskTwo() {
    console.log('task 2')
}

setTimeout(taskOne, 3000);
taskTwo();

const message1 = () => {
    console.log("This Message is shown after 3 second")
}

setTimeout(message1, 4000);

// SetTime Out Function Arrow Function //

setTimeout(() =>{
    console.log('This is Shown after 3 second')
}, 3000);

