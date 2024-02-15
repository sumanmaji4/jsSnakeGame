import { update as updateSnake, draw as drawSnake, gameOver } from './snake.js'
import { snake_speed } from './input.js'
import { draw as drawFood } from './food.js'

export const gameBoard = document.querySelector('.gameBoard')

let lastRenderTime = 0

function main(currentTime) {
  if (gameOver()) {
    gameBoard.innerHTML = 'Game Over'
    return
  }

  window.requestAnimationFrame(main)
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
  if (secondsSinceLastRender < 1 / snake_speed) return
  // console.log(snake_speed)
  lastRenderTime = currentTime
  update()
  draw()
}

window.requestAnimationFrame(main)

function update() {
  updateSnake()
}

function draw() {
  gameBoard.innerHTML = ''

  drawSnake(gameBoard)
  drawFood(gameBoard)
}
