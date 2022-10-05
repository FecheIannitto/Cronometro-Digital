const Start = document.getElementById("Start")
const Stop = document.getElementById("Stop")
const Reset = document.getElementById("Reset")
const horas = document.getElementById("horas")
const minutos = document.getElementById("minutos")
const segundos = document.getElementById("segundos")

let contadorInterval = null
let contador = 0



Start.addEventListener("click", () => {
    contadorInterval = setInterval(() => {

        contador += 1
        relojDigital(contador)

        console.log("Start")

    }, 1000)

})


Stop.addEventListener("click", () => {
    clearInterval(contadorInterval)
    console.log("Stop")
})


Reset.addEventListener("click", () => {

    clearInterval(contadorInterval)

    contador = 0
    segundos.value = "00"
    minutos.value = "00"
    horas.value = "00"

    console.log("Reset")
})

function setTimer(value) {
 
    return Number(value) < 9 ? "0" + (Number(value) + 1) : "" + (Number(value) + 1)

}


function relojDigital(contador) {

    if (contador % 60 !== 0) {

        segundos.value = setTimer(segundos.value)

    }

    if (contador % 60 === 0 && contador !== 0) {

        minutos.value = setTimer(minutos.value)

        segundos.value = "00"
    }

    if (contador % 3600 === 0 && contador !== 0) {

        horas.value = setTimer(horas.value)

        minutos.value = "00"
    }

}








