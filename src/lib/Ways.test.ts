import { isWayFreeAt, isWayFreeInDirection, findWay } from './Ways';
import { Coordinates } from './Coordinates';

describe('Ways', () => {
  describe('isWayFreeAt()', () => {
    it('returns true if the way is free', () => {
      expect(isWayFreeAt(1, 1)).toBeTruthy();
    });
  });

  describe('isWayFreeInDirection', () => {
    it('returns true if the way is free in the given direction', () => {
      expect(isWayFreeInDirection(1, 1, 'RIGHT')).toBeTruthy();
      expect(isWayFreeInDirection(1, 1, 'DOWN')).toBeTruthy();
    });

    it('returns false if the way is blocked', () => {
      expect(isWayFreeInDirection(1, 1, 'LEFT')).toBeFalsy();
      expect(isWayFreeInDirection(1, 1, 'UP')).toBeFalsy();
    });
  });

  describe('findWay()', () => {
    describe('with neighbouring tiles', () => {
      it('finds the way', () => {
        const origin: Coordinates = [1, 1];
        const destination: Coordinates = [1, 2];
        const wayPoints: Coordinates[] | null = findWay(origin, destination);
        expect(wayPoints).toBeTruthy();
        const expectedWay = [origin, destination];
        expect(wayPoints).toEqual(expectedWay);
      });
    });

    describe('with 1 tile down', () => {
      it('finds the way', () => {
        const origin: Coordinates = [1, 1];
        const destination: Coordinates = [1, 3];
        const wayPoints: Coordinates[] | null = findWay(origin, destination);
        expect(wayPoints).toBeTruthy();
        const expectedWay = [origin, [1, 2], destination];
        expect(wayPoints).toEqual(expectedWay);
      });
    });

    describe('with 1 tile right', () => {
      it('finds the way', () => {
        const origin: Coordinates = [1, 1];
        const destination: Coordinates = [2, 1];
        const wayPoints: Coordinates[] | null = findWay(origin, destination);
        expect(wayPoints).toBeTruthy();
        const expectedWay = [origin, destination];
        expect(wayPoints).toEqual(expectedWay);
      });
    });

    describe('with a corner to take', () => {
      it('finds the way', () => {
        const origin: Coordinates = [1, 1];
        const destination: Coordinates = [3, 5];
        const wayPoints: Coordinates[] | null = findWay(origin, destination);
        expect(wayPoints).toBeTruthy();
        const expectedWay = [
          origin,
          [1, 2],
          [1, 3],
          [1, 4],
          [1, 5],
          [2, 5],
          destination,
        ];
        expect(wayPoints).toEqual(expectedWay);
      });
    });

    describe('with destination in a wall', () => {
      it('finds the way', () => {
        const origin: Coordinates = [1, 1];
        const destination: Coordinates = [0, 0];
        const wayPoints: Coordinates[] | null = findWay(origin, destination);
        expect(wayPoints).toBeNull();
      });
    });
  });
});