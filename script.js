/* eslint-disable */
let boxTop = 200
let boxLeft = 200

const input = document.querySelector('input')
const log = document.getElementById('log')

input.addEventListener('keydown', logKey)

function logKey(e) {
  log.textContent += ` ${e.code}`
}

document.addEventListener('keydown', (event) => {
  const keyName = event.key;
  console.log(event)
  console.log(keyName)

  if ((keyName) === 'ArrowDown') {
    boxTop += 10;
  }
  if ((keyName) === 'ArrowUp') {
    boxTop -= 10;
  }
  if ((keyName) === 'ArrowLeft') {
    boxLeft -= 10;
  }
  if ((keyName) === 'ArrowRight') {
    boxLeft += 10;
  }

  document.getElementById("box").style.top = boxTop + "px";
  document.getElementById("box").style.left = boxLeft + "px";
})


