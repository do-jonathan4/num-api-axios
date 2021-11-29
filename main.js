let factInput = document.getElementById('factInput')
let factBtn = document.getElementById('factBtn')
let factDiv = document.getElementById('factDiv')
let factText = document.getElementById('factText')
let factRandom = document.getElementById('factRandom')

const sentHttpRequest = url => {
  axios.get(url)
    .then(res => {
      if (res.status === 200) {
        factDiv.style.display = 'block'
        factText.innerText = res.data
      }
    })
}

const getFact = () => {
  const fact = factInput.value
  if (isNaN(fact) || fact === '') return
  sentHttpRequest('http://numbersapi.com/' + fact)
}

const randomFact = () => {
  factInput.value = ''
  sentHttpRequest('http://numbersapi.com/random/trivia')
}

factInput.addEventListener('input', getFact)
factRandom.addEventListener('click', randomFact)
