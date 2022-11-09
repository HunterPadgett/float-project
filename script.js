const bodyFloat = document.querySelector('body');
const partyMusic = document.querySelector('audio');

bodyFloat.addEventListener('mousemove', (event) => {
  const x = event.offsetX;
  const y = event.offsetY;
  const spanElement = document.createElement('span');
  spanElement.style.left = x + 'px';
  spanElement.style.top = y + 'px';
  const size = randomNumber() + 'px';
  spanElement.style.width = size;
  spanElement.style.height = size;
  bodyFloat.appendChild(spanElement);
  setTimeout(() => {
    spanElement.remove()
  }, 100000)
})

partyMusic.volume = 0.1

function randomNumber() {
  return Math.floor(Math.random() * 100)
}