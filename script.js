const animal = document.querySelectorAll('.animal')

for (let i = 0; i < animal.length; i++) {
  animal[i].addEventListener('click', (e) => {
    let animal = e.target.innerText
    makeSound(animal)
    let selectedDiv = e.target
    selectedDiv.classList.add('active')
    setTimeout(() => {
      selectedDiv.classList.remove('active')
    }, 200)
  })
}

function makeSound(aniName) {
  switch (aniName) {
    case '🐊':
      let sound1 = new Audio('sound/alligator.mp3')
      sound1.play()
      break
    case '🧸':
      let sound2 = new Audio('sound/bear.mp3')
      sound2.play()
      break
    case '🐈':
      let sound3 = new Audio('sound/cat.mp3')
      sound3.play()
      break
    case '🦮':
      let sound4 = new Audio('sound/dog.mp3')
      sound4.play()
      break
    case '🐘':
      let sound5 = new Audio('sound/elephant.mp3')
      sound5.play()
      break
    case '🦊':
      let sound6 = new Audio('sound/fox.mp3')
      sound6.play()
      break
    case '🦍':
      let sound7 = new Audio('sound/gorilla.mp3')
      sound7.play()
      break
    case '🐎':
      let sound8 = new Audio('sound/horse.mp3')
      sound8.play()
      break
    case '🐦':
      let sound9 = new Audio('sound/jay.mp3')
      sound9.play()
      break
    case '🦁':
      let sound10 = new Audio('sound/lion.mp3')
      sound10.play()
      break
    case '🐒':
      let sound11 = new Audio('sound/monkey.mp3')
      sound11.play()
      break
    case '🐧':
      let sound12 = new Audio('sound/nachtigal.mp3')
      sound12.play()
      break
    case '🦉':
      let sound13 = new Audio('sound/owl.mp3')
      sound13.play()
      break
    case '🦜':
      let sound14 = new Audio('sound/parrot.mp3')
      sound14.play()
      break
    case '🦏':
      let sound15 = new Audio('sound/rhino.mp3')
      sound15.play()
      break
    case '🐍':
      let sound16 = new Audio('sound/snake.mp3')
      sound16.play()
      break
    case '🐅':
      let sound17 = new Audio('sound/tiger.mp3')
      sound17.play()
      break
    case '🐺':
      let sound18 = new Audio('sound/wolf.mp3')
      sound18.play()
      break
    case '🐂':
      let sound19 = new Audio('sound/ox.mp3')
      sound19.play()
      break
    case '🐓':
      let sound20 = new Audio('sound/rooster.mp3')
      sound20.play()
      break
    case '🐷':
      let sound21 = new Audio('sound/pig.mp3')
      sound21.play()
      break
    case '🐐':
      let sound22 = new Audio('sound/goat.mp3')
      sound22.play()
      break
    case '🦆':
      let sound23 = new Audio('sound/duck.mp3')
      sound23.play()
      break
    case '🐝':
      let sound24 = new Audio('sound/bee.mp3')
      sound24.play()
      break
    case '🦟':
      let sound25 = new Audio('sound/mosquito.mp3')
      sound25.play()
      break
    case '🦅':
      let sound26 = new Audio('sound/eagle.mp3')
      sound26.play()
      break
  }
}
