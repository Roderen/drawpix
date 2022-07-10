function showBurger() {
  const burgerBtn = document.querySelector('.header__burger'),
    burgerMenu = document.querySelector('.burger__menu'),
    body = document.body;

  burgerBtn.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    burgerBtn.classList.toggle('active');
    body.classList.toggle('active');
  })
}
showBurger();