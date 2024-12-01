import { Ship } from "./modules/ship";

describe('Ship class', () => {
  const battleship = new Ship('Battleship');
  it('returns an object that has correct properties', () => {
    expect(battleship).toEqual({ shipName:'Battleship', shipLength: 4, numberOfHits : 0, isSunken: false });
  })

  describe('.hit()', () => {
    it('increases the number of hits in the ship', () => {
      battleship.hit();
      expect(battleship.numberOfHits).toBe(1);
    })
  })

  describe('.isSunk()', () => {
    it('returns true or false based ship status', () => {
      expect(battleship.isSunk()).toBe(false);
    })

    it('returns true if numberOfHits is equal to shipLength', () => {
      battleship.numberOfHits = 4;
      expect(battleship.isSunk()).toBe(true);
    })
  })
})
