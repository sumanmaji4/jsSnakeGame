import { snakeBody, addSnakeBody } from './snake.js'
import { updateSnakeSpeed } from './input.js'

const myScore = document.getElementById('myScore')
const hiScore = document.getElementById('hiScore')

let score = 0
let Max_Score = 0

function getMaxScore() {
  Max_Score = localStorage.getItem('Max_Score')
    ? localStorage.getItem('Max_Score')
    : 0

  hiScore.innerHTML = `Highest Score: ${Max_Score}`
}

getMaxScore()

function foodPosition() {
  let currFood = {
    x: Math.floor(Math.random() * 21) + 1,
    y: Math.floor(Math.random() * 21) + 1,
  }

  while (
    snakeBody.some((temp) => {
      return temp.x == currFood.x && temp.y == currFood.y
    })
  ) {
    currFood = {
      x: Math.floor(Math.random() * 21) + 1,
      y: Math.floor(Math.random() * 21) + 1,
    }
  }

  return currFood
}

let currFood = foodPosition()

export function draw(gameBoard) {
  handleFoodEating(snakeBody[0])
  const foodElement = document.createElement('div')
  foodElement.style.gridRowStart = currFood.y
  foodElement.style.gridColumnStart = currFood.x
  foodElement.classList.add('food')
  gameBoard.appendChild(foodElement)
}

export function handleFoodEating(snakeHead) {
  if (currFood.x == snakeHead.x && currFood.y == snakeHead.y) {
    score++

    updateScore()
    addSnakeBody()
    updateSnakeSpeed()

    currFood = foodPosition()
  }
}

function updateScore() {
  myScore.innerHTML = `Your Score: ${score}`
  if (score > Max_Score) {
    Max_Score = score
    localStorage.setItem('Max_Score', Max_Score)
    hiScore.innerHTML = `Highest Score: ${Max_Score}`
  }
}
