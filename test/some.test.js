const _ = require('../underbar');

describe('some()', () => {
  it('returns true if any number is odd', () => {
    const nums = [2, 4, 5, 6];
    expect(_.some(nums, num => num % 2 === 1)).toBe(true);
  });

  it('returns false if no number is odd', () => {
    const nums = [2, 4, 6, 8];
    expect(_.some(nums, num => num % 2 === 1)).toBe(false);
  });

  it('returns true if any age is greater than 17', () => {
    const people = [
        { name: 'Harriet', age: 12},
        { name: 'Lazarus', age: 999},
        { name: 'Bethany', age: 14}
      ];
    expect(_.some(people, person => person.age > 17)).toBe(true);
  });

});