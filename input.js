export let direction = { x: 1, y: 0 }

const upBtn = document.querySelector('.up')
const downBtn = document.querySelector('.down')
const leftBtn = document.querySelector('.left')
const rightBtn = document.querySelector('.right')
const playPause = document.querySelector('.playPause')
const reset = document.querySelector('.reset')

// snake speed  --------------------------///
const speed = [0, 2]
export let snake_speed = 0
let c = 1

export function disablePlayPause() {
  playPause.disabled = true
}

function handlePlayPause() {
  snake_speed = speed[c]
  //   console.log(snake_speed)
  c = 1 - c

  if (c) playPause.innerHTML = 'play'
  else playPause.innerHTML = 'pause'
}

export function updateSnakeSpeed() {
  speed[1] += 0.2
  snake_speed = speed[1]
}

//--------------------------------------///

playPause.onclick = () => {
  handlePlayPause()
}

reset.onclick = () => {
  window.location.reload()
}

upBtn.onclick = () => {
  // console.log('up')
  if (direction.y !== 1) {
    direction = { x: 0, y: -1 }
  }
}

downBtn.onclick = () => {
  if (direction.y !== -1) {
    direction = { x: 0, y: 1 }
  }
}

leftBtn.onclick = () => {
  if (direction.x !== 1) {
    direction = { x: -1, y: 0 }
  }
}

rightBtn.onclick = () => {
  if (direction.x !== -1) {
    direction = { x: 1, y: 0 }
  }
}

const keys = [
  'w',
  'ArrowUp',
  's',
  'ArrowDown',
  'a',
  'ArrowLeft',
  'd',
  'ArrowRight',
]

document.addEventListener('keydown', handleKeyPress)

function handleKeyPress(e) {
  //   console.log(e)
  if (e.key == keys[0] || e.key == keys[1]) {
    upBtn.click()
  } else if (e.key == keys[2] || e.key == keys[3]) {
    downBtn.click()
  } else if (e.key == keys[4] || e.key == keys[5]) {
    leftBtn.click()
  } else if (e.key == keys[6] || e.key == keys[7]) {
    rightBtn.click()
  } else if (e.key === ' ') {
    playPause.click()
  } else if (e.key === 'r' || e.key === 'R') {
    reset.click()
  }
}
