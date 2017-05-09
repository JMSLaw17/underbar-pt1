_ = require('../underbar');

describe('map()', () => {
  it('maps every number in an array of numbers to their square', () => {
    const arr = [1, 2, 3, 4, 5];
    const mappedArr = _.map(arr, (el) => el * el);
    expect(mappedArr).toEqual([1, 4, 9, 16, 25]);
  });

  it('maps every number in an object with numbers to their squares', () => {
    const object = {
      a: 1,
      b: 2,
      c: 3
    };
    const mappedObj = _.map(object, (el) => el * el);
    expect(mappedObj).toEqual([1, 4, 9]);
  });
});