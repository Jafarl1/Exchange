
let amount = document.getElementById("amount")
let result = document.getElementById("result")
let convert = document.getElementById("convert")
let cur1 = document.getElementById("cur1")
let cur2 = document.getElementById("cur2")
let warntext = document.querySelector(".warntext")

fetch("http://api.exchangeratesapi.io/v1/latest?access_key=777617386e06176201058a8b71e83740&format=1")
    .then(a => a.json())
    .then(data => {
        let keys = Object.keys(data.rates)
        keys.map(a => {
            cur1.innerHTML += `
       <option value=${a}>${a}</option>`
            cur2.innerHTML += `
       <option value=${a}>${a}</option>`
        })
    })

convert.addEventListener("click", () => {
    fetch("http://api.exchangeratesapi.io/v1/latest?access_key=777617386e06176201058a8b71e83740&format=1")
        .then(a => a.json())
        .then(data => {
            if (amount.value > 0) {
                result.innerText = `${(amount.value / data.rates[cur1.value] * data.rates[cur2.value]).toFixed(4)}`
            }
            else {
                result.innerText = ""
                amount.classList.add("warn")
                warntext.classList.add("show")
            }
        })
})

window.addEventListener("click", () => {
    amount.classList.remove("warn")
    warntext.classList.remove("show")
})
