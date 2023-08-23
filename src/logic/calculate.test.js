import calculate from './calculate';

describe('Testing if calculations and buttons are correct', () => {
  it('Testing if AC is pressed', () => {
    const result = calculate({ total: 2, next: 5, operation: '+' }, 'AC');
    expect(result).toEqual({ total: null, next: null, operation: null });
  });

});