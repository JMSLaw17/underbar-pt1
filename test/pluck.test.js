const _ = require('../underbar');

describe('pluck()', () => {
  it('returns an array of just ages, given an array of people objects', () => {
    const people = [
      { name: 'Harriet', age: 12},
      { name: 'Lazarus', age: 999},
      { name: 'Bethany', age: 14}
    ];
    const result = _.pluck(people, 'age');
    expect(result).toEqual([12, 999, 14]);
  });

  it('returns an array of ages and undefineds, given an array of people objects, only some of which have ages', () => {
    const people = [
      { name: 'Harriet', age: 12},
      { name: 'Lazarus'},
      { name: 'Bethany', age: 14},
      { nmae: 'Sally'}
    ];
    const result = _.pluck(people, 'age');
    expect(result).toEqual([12, undefined, 14, undefined]);
  });

});