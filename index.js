const encript = (entry) => {
  const arrEntry = entry.split('')
  let outString = ''
  let toAdd = ''
  for (let i = 0; i < arrEntry.length; i++) {
    const letra = arrEntry[i];
    if (letra === 'e') toAdd = 'enter'
    else if (letra === 'i') toAdd = 'imes'
    else if (letra === 'a') toAdd = 'ai'
    else if (letra === 'o') toAdd = 'ober'
    else if (letra === 'u') toAdd = 'ufat'
    else toAdd = letra
    outString += toAdd
  }
  return outString

}

const decript = (entry) => {
  let outString = entry.replace(/enter/g, 'e')
    .replace(/imes/g, 'i')
    .replace(/ober/g, 'o')
    .replace(/ufat/g, 'u')
    .replace(/ai/g, 'a')
  return outString
}

document.querySelector('#userInput').focus()
const getUserInput = () => {
  const userInputText = document.querySelector('#userInput').value
  const errorSection = document.querySelector('.errorSection')
  const outputSection = document.querySelector('.outputSection')
  const outputText = document.querySelector('.outputText')
  errorSection.style.display = 'none'
  outputSection.style.display = 'flex'
  outputText.innerText = encript(userInputText)
  return userInputText
}
const handleUserInput = () => {
  const userInputText = document.querySelector('#userInput').value
  const encBtn = document.querySelector('.encBtn')
  const hasUpper = /[A-Z]/.test(userInputText.trim());
  const hasSpecialChars = /[!@#$%^&*'"ñ()]/.test(userInputText.trim());
  const hasAccentedChars = /[áéíóúàèìòù]/i.test(userInputText.trim());
  const hasNumbers = /\d/.test(userInputText.trim());
  const emptyInput = userInputText.trim() === ''
  encBtn.disabled = hasUpper || hasSpecialChars || hasAccentedChars || emptyInput || hasNumbers
  if (encBtn.disabled) {
    const warning = document.querySelector('.warning')
    const encBtn = document.querySelector('.encBtn')
    warning.style.color = 'red'
    encBtn.style.background = 'grey'
  }
  else {
    const warning = document.querySelector('.warning')
    const encBtn = document.querySelector('.encBtn')
    warning.style.color = '#0A3871'
    encBtn.style.background = '#0A3871'
    encBtn.style.color = '#E5E5E5'
  }
  return userInputText;
}

const clearInput = () => {
  document.querySelector('#userInput').value = ''
}
const clearOutput = () => {
  document.querySelector('.outputText').innerText = ''
}

const copyToClipboard = () => {
  let outputText = document.querySelector('.outputText').innerText
  const textToCopy = outputText
  navigator.clipboard.writeText(textToCopy)
    .then(() => {
      clearOutput()
      clearInput()
      document.querySelector('.outputSection').style.display = 'none'
      document.querySelector('.errorSection').style.display = 'flex'

      setInterval(() => {
        document.querySelector('#userInput').setAttribute('placeholder', "Enter your text here !")
      }, 5000);
      document.querySelector('#userInput').setAttribute('placeholder', "Please paste the copied text to decrypt here !")


    })
    .catch((err) => {
      console.error("Error copying text to clipboard: ", err)
    })
}

const decriptInput = () => {
  const copiedInput = document.querySelector('#userInput').value
  const toDecript = decript(copiedInput)
  document.querySelector('#userInput').value = toDecript
}













