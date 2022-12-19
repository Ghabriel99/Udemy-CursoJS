function showHour (){
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    })
}

const Timer = setInterval (function(){
    console.log(showHour())
    
});

function funcaoDoInterval(){
    console.log(showHour());
}

setInterval(funcaoDoInterval, 1000);

