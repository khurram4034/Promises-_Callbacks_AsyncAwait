function printGreeting(msg, alerGreet) {
    if(msg === 'evening') {
        evening(alerGreet);
    }else if(msg === 'morning') {
        morning(alerGreet);
    }else{
        night(alerGreet);
    }
}

function mornimg(alerGreet) {
    alert('Good Mornimg');
    alerGreet('Hellow World');
}

function evening(alerGreet) {
    alert('Good Evening');
    alerGreet('Hellow World');
}

function night(alerGreet) {
    alert('Good Night');
    alerGreet('Hellow World');
}

function alerGreet(msg){
    alert(msg)
}

printGreeting('evening', alerGreet);