const bodyFloat = document.querySelector('body');
const partyMusic = document.querySelector('audio');

document.addEventListener("touchstart", function(){}, true);

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
  }, 10000)
  event.preventDefault();
})

const volume = () => {
  partyMusic.volume = 0.1;
  partyMusic.autoplay;
  partyMusic.loop;
}

function randomNumber() {
  return Math.floor(Math.random() * 100)
}

volume();