import operate from './operate';

describe('Testing operations', () => {
  it('Testing addition', () => {
    const result = operate(2, 2, '+');
    expect(result).toBe('4');
  });

  it('Testing substraction', () => {
    const result = operate(4, 4, '-');
    expect(result).toBe('0');
  });

  it('Testing multiplication', () => {
    const result = operate(6, 6, 'x');
    expect(result).toBe('36');
  });

  it('Testing division', () => {
    const result = operate(24, 2, '÷');
    expect(result).toBe('12');
  });

  it('Testing division by zero', () => {
    const result = operate(1, 0, '÷');
    expect(result).toBe("Can't divide by 0.");
  });
});