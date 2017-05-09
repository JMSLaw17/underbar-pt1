const _ = require('../underbar');

describe('uniq()', () => {
  it('de-dups a list of numbers', () => {
    const nums = [2, 4, 5, 5, 7, 4, 10, 2];
    expect(_.uniq(nums)).toEqual([2, 4, 5, 7, 10]);
  });

  it('when given an object, returns an array with each unique value', () => {
    const points = {
      gameOne: 5,
      gameTwo: 7,
      gameThree: 7,
      gameFour: 5
      };
    expect(_.uniq(points)).toEqual([5, 7]);
  });
});