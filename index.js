window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}


function activateMenuAtCurrentSection(section) {

  // linha imaginária para check-in
  const targetLine = scrollY + innerHeight / 2

  // verificar se a seção passou da linha
  //quais dados vou precisar?

  // Qual é o topo (onde começa) da seção?
  const sectionTop = section.offsetTop

  // Qual é o tamanho da seção?
  const sectionHeight = section.offsetHeight
 
  // Qual é a base (onde termina) da seção?
  const sectionEndsAt = sectionTop + sectionHeight


  // verifica se a linha imaginária está no topo da seção ou passou do topo da seção.
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop


  // verifica se a base está abaixo da linha imaginária que criamos
  // digamos que a linha imaginária está nos 400 e a base que é o fim da seção está nos 800. Enquanto a base estiver acima da linha, ou seja, enquanto a linha estiver dentro da base da seção, ela não ultrapassou a base da seção para entrar na proxima seção, a linha precisa chegar nos 801 para ultrapassar a base.
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine


  // limites da seção (verifica se estamos dentro da seção) a base é maior do que a linha imaginária? sim, 800. a linha é 400. logo estou dentro da seção da base, quando a linha chegar nos 801, ela troca de seção e assim vai.
  const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

function showNavOnScroll() {
  if(scrollY > 0) {
    navigation.classList.add('scroll');
  } else {
    navigation.classList.remove('scroll');
  }
}

function showBackToTopButtonOnScroll() {
  if(scrollY > 550) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded');
}

function closeMenu() {
  document.body.classList.remove('menu-expanded');
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
}).reveal(`#home,
 #home img,
 #home .stats,
 #services,
 #services header,
 #services .card,
 #about,
 #about header,
 #about .content`);