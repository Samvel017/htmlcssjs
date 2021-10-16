let flexParent = document.querySelector('.team-flex')
let flexBlocks = document.querySelectorAll('.team-block')
flexParent.style.display = 'flex'
flexParent.style.justifyContent = 'center'
flexParent.style.flexWrap = 'wrap'
flexParent.style.gridGap = '30px'
flexParent.style.marginBottom = '120px'

for (let i = 0; i < flexBlocks.length; i++) {
  flexBlocks[i].style.paddingTop = '15px'
  flexBlocks[i].style.width = '270px'
  flexBlocks[i].style.height = '266px'
  flexBlocks[i].style.background = 'linear-gradient(268.12deg, rgba(254, 254, 255, 0.032) -11.04%, rgba(255, 255, 255, 0.018) 104.89%)'
  flexBlocks[i].style.boxShadow = '0px 22px 18px rgba(0, 0, 0, 0.05)'
  flexBlocks[i].style.borderRadius = '34px'
  flexBlocks[i].style.border = '1px rgba(255, 255, 255, 0.07) solid'
  flexBlocks[i].style.display = 'flex'
  flexBlocks[i].style.flexDirection = 'column'
  flexBlocks[i].style.alignItems = 'center'
  flexBlocks[i].style.justifyContent = 'flex-start'
  flexBlocks[i].lastElementChild.style.display = 'flex'
  flexBlocks[i].lastElementChild.style.gridGap = '12px'
  flexBlocks[i].firstElementChild.nextElementSibling.style.fontSize = '28px'
  flexBlocks[i].firstElementChild.nextElementSibling.style.color = '#fff'
  flexBlocks[i].firstElementChild.nextElementSibling.style.fontWeight = '500'
  flexBlocks[i].firstElementChild.nextElementSibling.style.marginBottom = '7px'
  flexBlocks[i].firstElementChild.nextElementSibling.nextElementSibling.style.letterSpacing = '0.03em'
  flexBlocks[i].firstElementChild.nextElementSibling.nextElementSibling.style.color = '#fff'
  flexBlocks[i].firstElementChild.nextElementSibling.nextElementSibling.style.fontWeight = '400'
  flexBlocks[i].firstElementChild.nextElementSibling.nextElementSibling.style.marginBottom = '11px'
}
flexBlocks[0].firstElementChild.nextElementSibling.innerHTML = 'Sunny Khan'
flexBlocks[1].firstElementChild.nextElementSibling.innerHTML = 'Alina Jesia'
flexBlocks[2].firstElementChild.nextElementSibling.innerHTML = 'Alex Sohag'
flexBlocks[3].firstElementChild.nextElementSibling.innerHTML = 'Afroza Mou'

flexBlocks[0].firstElementChild.nextElementSibling.nextElementSibling.innerHTML = 'EXECUTIVE OFFICER'
flexBlocks[1].firstElementChild.nextElementSibling.nextElementSibling.innerHTML = 'UX/UI DESIGNER'
flexBlocks[2].firstElementChild.nextElementSibling.nextElementSibling.innerHTML = 'BUSINESS DEVELOPMENT'
flexBlocks[3].firstElementChild.nextElementSibling.nextElementSibling.innerHTML = 'HEAD OF MARKETING'


// BURGER MENU

let menu = document.querySelector('.menu')
let hidNav = document.querySelector('#hidden-nav')
let menuLogo = document.querySelector('.menu-logo')
let xLogo = document.querySelector('.x-logo')
hidNav.style.right = "-100%"
menu.addEventListener('click', () => {
  if (hidNav.style.right == "-100%") {
    hidNav.style.right = "0"
  } else {
    hidNav.style.right = "-100%"
  }
  menuLogo.classList.toggle("hide")
  xLogo.classList.toggle("hide")
})

// JOIN BUTTON
let joinBtn = document.querySelector('#join')
let modal = document.querySelector('.modal-container')
modal.style.display == "none"
joinBtn.addEventListener('click', () => {
  if(modal.style.display == "none") {
    modal.style.display = "grid"
  } else {
    modal.style.display = "none"
  }
})

let logItems = document.querySelectorAll('.log-item')
let enterBut = document.querySelector('#entModal')
let cancBut = document.querySelector('#cancModal')
let passVal = document.querySelector('#passVal')
let passText;
let errText = document.querySelector('#errText')

enterBut.addEventListener('click', () => {
  passText = passVal.value
  if(passText.length >=6) {
    for (let i = 0; i < logItems.length; i++) {
      logItems[i].style.display = 'block'
    }
    modal.style.display = "none"
  } else {
    errText.innerHTML = "Wrong input! \n Enter a combination of at least six numbers and letters."
    errText.style.color = 'red'
  }
})

cancBut.addEventListener('click', () => {
  modal.style.display = "none"
})

let learnBut = document.querySelectorAll('.learnBut')
let learnWind = document.querySelector('.learn-container')
let btnClose = document.querySelector('#learnTextClose')
learnWind.style.display = "none"
for (let i = 0; i < learnBut.length; i++) {
  learnBut[i].addEventListener('click', () => {
    learnWind.style.display = "grid"
  })
}
btnClose.addEventListener('click', () => {
  learnWind.style.display = "none"
})
