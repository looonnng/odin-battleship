import Ship from './ship.js';

export default class Gameboard {
  constructor() {
    // init empty 2D array
    this.board = Array.from({length: 10}, () => new Array(10).fill(null));
  }

  generateShip(shipType, coordinates, direction = 'horizontal') {
    const [x, y] = coordinates;
    // check if overlap
    if (this.board[x][y] !== null) {
      throw new Error('This spot is occupied');
    }

    const newShip = new Ship(shipType);

    if (this.checkOutOfBound(coordinates, newShip.shipLength, direction)) {
      throw new Error('Placement is out of bound!');
    }

    for(let i = 0; i < newShip.shipLength; i++) {
      if (direction === 'horizontal') {
        this.board[x][y+i] = 'X';
      } else {
        this.board[x+i][y] = 'X';

      }
    }
  }

  checkOutOfBound(coordinates, shipLength, direction) {
    const [x, y] = coordinates;
    let dir = direction === 'horizontal' ? x : y;
    return dir + shipLength > 10;
  }
}

const temp = new Gameboard();

temp.generateShip('Battleship', [7, 0], 'vertical');
console.log(temp.board);
