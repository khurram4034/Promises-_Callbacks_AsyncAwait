function apiFetch() {
let promise = new Promise(function (resolve, reject){
        setTimeout(function () {
            console.log('New Promise')
            resolve("Data")
        }, 2000)
    })
    return promise
}

async function _asyncJS(){
    try {
        let data =  await apiFetch()
        console.log(data, "Successful")
    }
    catch(error){
        console.log(error, "error")
    }
}

_asyncJS();