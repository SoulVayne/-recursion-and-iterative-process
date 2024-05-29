const {
  sumFrom10ToN,
  fib,
  multiplyOddNumbers,
  power,
  sumFibonacci,
  largestDivisor
} = require('./index');

describe('sumFrom10ToN', () => {
  test('returns the correct sum for n = 15', () => {
    expect(sumFrom10ToN(15)).toBe(75);
  });

  test('returns the correct sum for n = 20', () => {
    expect(sumFrom10ToN(20)).toBe(165);
  });
});

describe('fib', () => {
  test('returns the correct Fibonacci number for n = 0', () => {
    expect(fib(0)).toBe(0);
  });

  test('returns the correct Fibonacci number for n = 1', () => {
    expect(fib(1)).toBe(1);
  });

  test('returns the correct Fibonacci number for n = 5', () => {
    expect(fib(5)).toBe(5);
  });
});

describe('multiplyOddNumbers', () => {
  test('returns the correct result for n = 1 and m = 5', () => {
    expect(multiplyOddNumbers(1, 5)).toBe(15);
  });

  test('returns the correct result for n = 2 and m = 6', () => {
    expect(multiplyOddNumbers(2, 6)).toBe(15);
  });
});

describe('power', () => {
  test('returns the correct result for a = 2 and n = 3', () => {
    expect(power(2, 3)).toBe(8);
  });

  test('returns the correct result for a = 5 and n = 2', () => {
    expect(power(5, 2)).toBe(25);
  });
});

describe('sumFibonacci', () => {
  test('returns 0 for n = 0', () => {
    expect(sumFibonacci(0)).toBe(0);
  });

  test('returns the correct sum for n = 1', () => {
    expect(sumFibonacci(1)).toBe(1);
  });

  test('returns the correct sum for n = 5', () => {
    expect(sumFibonacci(5)).toBe(12);
  });
});

describe('largestDivisor', () => {
  test('returns the correct largest divisor for n = 10', () => {
    expect(largestDivisor(10)).toBe(5);
  });

  test('returns the correct largest divisor for n = 15', () => {
    expect(largestDivisor(15)).toBe(5);
  });
});
