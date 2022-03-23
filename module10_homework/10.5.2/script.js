const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {

  let screenHeight = window.screen.height;
  var screenWidth = window.screen.availWidth;

  alert(`Размер экрана ${screenHeight} х ${screenWidth}`);
  
});
