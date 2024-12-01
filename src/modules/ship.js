export class Ship {
  constructor(shipName, shipLength = this.assignShipLength(shipName) ,numberOfHits = 0, isSunken = false) {
    this.shipName = shipName;
    this.shipLength = shipLength;
    this.numberOfHits = numberOfHits;
    this.isSunken = this.isSunk();
  }

  assignShipLength(shipType) {
    switch (shipType) {
      case 'Carrier':
        return 5;
      case 'Battleship':
        return 4;
      case 'Cruiser':
        return 3;
      case 'Submarine':
        return 3;
      case 'Destroyer':
        return 2;
      default:
        throw new Error('Ship Type is wrong!');
    }
  }

  hit() {
    this.numberOfHits += 1;
  }

  isSunk() {
    return this.shipLength <= this.numberOfHits;
  }
}



export default { Ship };