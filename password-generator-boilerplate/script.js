/** Select required elements in DOM */
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const resultEl = document.getElementById('result')
const clipboardEl = document.getElementById('clipboard')

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

//console.log(randomFunc[type])

//Add functionality to copy password on clipboard
clipboardEl.addEventListener('click', () => {
    const password = resultEl.innerText;

    if(!password){
        return;
    }

    navigator.clipboard.writeText(password)
    alert("The password copied to Clipboard")
})



generateEl.addEventListener('click', () => {
    const length = lengthEl.value
    const hasLower = lowercaseEl.checked
    const hasUpper = uppercaseEl.checked
    const hasNumbers = numbersEl.checked
    const hasSymbols = symbolsEl.checked

    resultEl.innerText = generatePassword(hasLower, hasUpper,hasNumbers, hasSymbols, length  )
})

//Add functionality to generate password
function generatePassword(lower, upper, number, symbol, length) {
    let generatePassword = " "
    const typescount = lower + upper + number + symbol
    console.log("typescount",typescount,[{lower},{upper}, {number}, {symbol}])

    const typesArray = [{lower},{upper}, {number}, {symbol}].filter(item=>Object.values(item)[0])
    console.log("typesArray", typesArray)

   if(typescount === 0){
    return
   }

    for(let i=0; i<length; i+= typescount){
     typesArray.forEach(type =>{
        const functionName = Object.keys(type)[0]
        generatePassword += randomFunc[functionName]()
})
}

    const finalpassword = generatePassword.slice(0,length)
    return finalpassword
}

//Generate random lower case alphabets 
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random()*26)+97)
   
}

//Generate random upper case alphabets 
function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random()*26)+65)
   
}

//Generate random numbers
function getRandomNumber() {
   return String.fromCharCode(Math.floor(Math.random()*10)+48)
}

//Generate random symbol
function getRandomSymbol() {
    return String.fromCharCode(Math.floor(Math.random()*14)+33) 
}
