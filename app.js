console.log('JS loaded')

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.grid')
  const width = 15
  const squares = []
  let spaceshipIndex = 217
  let direction = 'right'
  let alienArray = [0,1,2,3,4,5,6,7,8,15,16,17,18,19,20,21,22,23,30,31,32,33,34,35,36,37,38]

  // Create grid
  for(let i = 0; i < width * width; i++) {
    const square = document.createElement('div')
    squares.push(square)
    grid.appendChild(square)
  }


  // User spaceship ======================================
  // Create user spaceship
  squares[spaceshipIndex].classList.add('spaceship')
  squares[spaceshipIndex].classList.add('data-direction', direction)



  // Create function to move user spaceship

  function moveSpaceship() {
    // find the square with the class of spaceship
    const spaceship = squares.find(square => square.classList.contains('spaceship'))
    // remove the class of spaceship from that square
    spaceship.classList.remove('spaceship')
    // add the class of player to square the player should move to
    squares[spaceshipIndex].classList.add('spaceship')
  }

  // Add event listener to move user moveSpaceship

  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      // Move left
      if (spaceshipIndex % width > 0) {
        spaceshipIndex--;
        moveSpaceship();
      }
    } else if (e.key === 'ArrowRight') {
      // Move right
      if (spaceshipIndex % width < width - 1) {
        spaceshipIndex++;
        moveSpaceship();
      }
    }
  });


  // Aliens ==============================================

  // Create alien array
  alienArray.forEach(alien => {
    console.log('alien array foreach', squares[alien])
    squares[alien].classList.add('activeAlien')
  })
  console.log(alienArray)









})
