/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const input = document.getElementById("input")
let mf = document.getElementById("mf")
let lg = document.getElementById("lg")
let kp = document.getElementById("kp")
let convMF = ""
let convLG = ""
let convKP = ""
let convFM = ""
let convGL = ""
let convPK = ""

input.addEventListener("input", function convert() {
    convMF = input.value * 3.281
    convLG = input.value * 0.264
    convKP = input.value * 2.204
    convFM = input.value / 3.281
    convGL = input.value / 0.264
    convPK = input.value / 2.204
    render()
})

function render() {
    mf.innerHTML = `<p id="mf">${input.value} meters = ${convMF.toFixed(2)} feet | ${input.value} feet = ${convFM.toFixed(2)} meters</p>`
    lg.innerHTML = `<p id="lg">${input.value} liters = ${convLG.toFixed(2)} gallons | ${input.value} gallons = ${convGL.toFixed(2)} liters</p>`
    kp.innerHTML = `<p id="kp">${input.value} killograms = ${convKP.toFixed(2)} pounds | ${input.value} pounds = ${convPK.toFixed(2)} killograms`
}