function makeRequest(location){
    return new Promise((resolve, reject)=>{
        console.log(`making request to ${location}`)
    if(location == 'google'){
        resolve('google says hello')
    }
    else{
        reject('we can onley talk to google')
    }
    })
}




function processRequest(response){
    return new Promise((resolve, reject)=>{
        console.log('Processing response')
        resolve(`Extra Info ${response}`)
    })
}

async function doWork(){
    try {
        const response = await makeRequest('google')
        console.log('Request received')
        const processRequest = await processRequest(response)
        console.log(processRequest)
    }
    catch(err){
        console.log(err)
    }
}

doWork();