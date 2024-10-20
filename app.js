console.log('JS loaded')

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.grid')
  let alienArray = [0,1,2,3,4,5,6,7,8,9,15,16,17,18,19,20,21,22,23,24,30,31,32,33,34,35,36,37,38,39]
  const width = 15
  const squares = []
  let spaceshipIndex = [217]

  // Create grid
  for(let i = 0; i < width * width; i++) {
    const square = document.createElement('div')
    squares.push(square)
    grid.appendChild(square)
  }


  // User spaceship ========================================================
  // Create user spaceship
  squares[spaceshipIndex].classList.add('spaceship')

  // Create function to move user spaceship -------------------------------

  function moveSpaceship() {
    // find the square with the class of spaceship
    const spaceship = squares.find(square => square.classList.contains('spaceship'))
    // remove the class of spaceship from that square
    spaceship.classList.remove('spaceship')
    // add the class of player to square the player should move to
    squares[spaceshipIndex].classList.add('spaceship')
  }

  // Add event listener to move user moveSpaceship ------------------------

  document.addEventListener('keydown', (e) => {
    switch (e.key) {
      case 'ArrowLeft':
        // Move left
        if (spaceshipIndex % width > 0) {
          spaceshipIndex--; // Move left
        } else {
          // If at the left edge, move to the right edge of the same row
          spaceshipIndex = (Math.floor(spaceshipIndex / width) + 1) * width - 1; // Move to the last index of the same row
        }
        moveSpaceship();
        break;
  
      case 'ArrowRight':
        // Move right
        if (spaceshipIndex % width < width - 1) {
          spaceshipIndex++; // Move right
        } else {
          // If at the right edge, move to the left edge of the same row
          spaceshipIndex = Math.floor(spaceshipIndex / width) * width; // Move to the first index of the same row
        }
        moveSpaceship();
        break;
    }
  });
  //rocket movement
  document.addEventListener('keydown', (e) => {
    let bulletIndex = spaceshipIndex
    if(e.code === 'Space') {
      setInterval(() => {
        squares[bulletIndex].classList.remove('bullet')
        bulletIndex -= width
        squares[bulletIndex].classList.add('bullet')
      }, 500)
    }
  })  


  // Aliens ================================================================

  // Create alien array
  alienArray.forEach(alien => {
    console.log('alien array foreach', squares[alien])
    squares[alien].classList.add('activeAlien')
  })
  console.log(alienArray)

  // Create function to move aliens ----------------------------------------

  setInterval(() => {
    // Remove the class of activeAlien from each current square
    alienArray.forEach(alien => {
      squares[alien].classList.remove('activeAlien');
    });
  
    // Update the alien array
    alienArray = alienArray.map(alien => {
      // Check if the alien is at the rightmost edge
      if ((alien + 1) % width === 0) { // If alien is at the rightmost edge
        // Move to the leftmost position of the next row below
        return (Math.floor(alien / width) + 1) * width; // Move down one row to the first column
      } else {
        return alien + 1; // Move right
      }
    });
  
    // Remove aliens that have moved below the grid
    alienArray = alienArray.filter(alien => alien < width * width);
  
    // Add the class of activeAlien to the new positions
    alienArray.forEach(alien => {
      squares[alien].classList.add('activeAlien');
    });
  
  }, 500);
})

  // User Bullet ===============================================
  // squares[bulletIndex].classList.add('bullet')


  // Added event listener on space bar to fire bullet ----------------------
  // this bit doesn't work --------


  // bulletIndex = squares[bulletIndex - width].classList.add('bullet')