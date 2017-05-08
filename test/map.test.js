_ = require('../underbar');

describe('map()', () => {
  it('maps every number in an array of numbers to their square', () => {
    const arr = [1, 2, 3, 4, 5];
    const mappedArr = _.map(arr, (el) => el * el);
    expect(mappedArr).toEqual([1, 4, 9, 16, 25]);
  });

  it('maps every number in an array-like object of numbers to their square', () => {
    const arrayLikeObj = {
      length: 3,
      0: 1,
      1: 2,
      2: 3
    };
    const mappedArr = _.map(arrayLikeObj, (el) => el * el);
    expect(mappedArr).toEqual([1, 4, 9]);
  });
});