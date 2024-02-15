import { direction, disablePlayPause } from './input.js'

const GRID_SIZE = 21
let game_over = 0
let removedPart

export function gameOver() {
  return game_over
}

export let snakeBody = [
  { x: 8, y: 11 },
  { x: 7, y: 11 },
  { x: 6, y: 11 },
]

function outOfBound(position) {
  return (
    position.x < 1 ||
    position.x > GRID_SIZE ||
    position.y < 1 ||
    position.y > GRID_SIZE
  )
}
function bodyHit(position) {
  for (let i = 1; i + 1 < snakeBody.length; i++) {
    if (snakeBody[i].x == position.x && snakeBody[i].y == position.y) return 1
  }
  return 0
}

export function update() {
  let temp = {
    x: snakeBody[0].x + direction.x,
    y: snakeBody[0].y + direction.y,
  }

  if (outOfBound(temp) || bodyHit(temp)) {
    disablePlayPause()
    game_over = 1
    return
  }
  snakeBody.unshift(temp)
  removedPart = snakeBody.pop()
}
export function addSnakeBody() {
  snakeBody.push(removedPart)
}

export function draw(gameBoard) {
  if (game_over) return
  let cnt = 0

  snakeBody.forEach((segment) => {
    const snakeElement = document.createElement('div')
    snakeElement.style.gridRowStart = segment.y
    snakeElement.style.gridColumnStart = segment.x
    snakeElement.classList.add('snake')
    if (!cnt) snakeElement.classList.add('snakeHead')
    gameBoard.appendChild(snakeElement)
    cnt++
  })
}
