console.log('JS loaded')

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.grid')
  const width = 15
  const squares = []
  let userSpaceshipIndex = 217
  let alienArray = [0,1,2,3,4,5,6,7,8,15,16,17,18,19,20,21,22,23,30,31,32,33,34,35,36,37,38]

// Create grid
  for(let i = 0; i < width * width; i++) {
    const square = document.createElement('div')
    squares.push(square)
    grid.appendChild(square)
  }

//  const alienArray = [
console.log(squares)
//  ]

  // User spaceship ======================================
  // Create user spaceship
  squares[userSpaceshipIndex].classList.add('spaceship')

  // Create function to move user spaceship

  function moveSpaceship() {

  }
    // Aliens ==============================================
  // Create alien alien array

  alienArray.forEach(alien => {
    console.log('alien array foreach', squares[alien])
    squares[alien].classList.add('activeAlien')
  })
  // Loop over array of aliens
//  alienArray.forEach(element, index, array) => {
//    alienArray.classList.add('active')
//
//  })
//
//  classList.add('activeAlien')
// }


})
