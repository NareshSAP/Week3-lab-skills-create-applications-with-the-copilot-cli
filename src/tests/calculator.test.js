/**
 * Comprehensive Unit Tests for Calculator Functions
 * Tests all four basic arithmetic operations and edge cases
 */

const calculator = require('../calculator');

describe('Calculator Functions', () => {
  
  // Addition Tests
  describe('Addition (add)', () => {
    test('should add two positive numbers', () => {
      expect(calculator.add(2, 3)).toBe(5);
    });

    test('should add two negative numbers', () => {
      expect(calculator.add(-5, -3)).toBe(-8);
    });

    test('should add positive and negative numbers', () => {
      expect(calculator.add(10, -4)).toBe(6);
    });

    test('should add zero to a number', () => {
      expect(calculator.add(5, 0)).toBe(5);
    });

    test('should add two zeros', () => {
      expect(calculator.add(0, 0)).toBe(0);
    });

    test('should add decimal numbers', () => {
      expect(calculator.add(2.5, 3.7)).toBeCloseTo(6.2, 1);
    });

    test('should handle large numbers', () => {
      expect(calculator.add(1000000, 2000000)).toBe(3000000);
    });
  });

  // Subtraction Tests
  describe('Subtraction (subtract)', () => {
    test('should subtract two positive numbers', () => {
      expect(calculator.subtract(10, 4)).toBe(6);
    });

    test('should subtract resulting in negative number', () => {
      expect(calculator.subtract(3, 5)).toBe(-2);
    });

    test('should subtract two negative numbers', () => {
      expect(calculator.subtract(-5, -3)).toBe(-2);
    });

    test('should subtract zero from a number', () => {
      expect(calculator.subtract(5, 0)).toBe(5);
    });

    test('should subtract a number from zero', () => {
      expect(calculator.subtract(0, 5)).toBe(-5);
    });

    test('should subtract two zeros', () => {
      expect(calculator.subtract(0, 0)).toBe(0);
    });

    test('should subtract decimal numbers', () => {
      expect(calculator.subtract(10.5, 3.2)).toBeCloseTo(7.3, 1);
    });

    test('should handle large numbers', () => {
      expect(calculator.subtract(5000000, 2000000)).toBe(3000000);
    });
  });

  // Multiplication Tests
  describe('Multiplication (multiply)', () => {
    test('should multiply two positive numbers', () => {
      expect(calculator.multiply(45, 2)).toBe(90);
    });

    test('should multiply by zero', () => {
      expect(calculator.multiply(5, 0)).toBe(0);
    });

    test('should multiply two negative numbers (positive result)', () => {
      expect(calculator.multiply(-4, -3)).toBe(12);
    });

    test('should multiply positive and negative numbers (negative result)', () => {
      expect(calculator.multiply(5, -2)).toBe(-10);
    });

    test('should multiply by one', () => {
      expect(calculator.multiply(7, 1)).toBe(7);
    });

    test('should multiply decimal numbers', () => {
      expect(calculator.multiply(2.5, 4)).toBe(10);
    });

    test('should multiply fractional numbers', () => {
      expect(calculator.multiply(0.5, 0.5)).toBeCloseTo(0.25, 2);
    });

    test('should handle large numbers', () => {
      expect(calculator.multiply(1000, 1000)).toBe(1000000);
    });
  });

  // Division Tests
  describe('Division (divide)', () => {
    test('should divide two positive numbers', () => {
      expect(calculator.divide(20, 5)).toBe(4);
    });

    test('should divide resulting in decimal', () => {
      expect(calculator.divide(10, 3)).toBeCloseTo(3.333, 2);
    });

    test('should divide negative numbers (positive result)', () => {
      expect(calculator.divide(-10, -2)).toBe(5);
    });

    test('should divide positive by negative (negative result)', () => {
      expect(calculator.divide(10, -2)).toBe(-5);
    });

    test('should divide by one', () => {
      expect(calculator.divide(5, 1)).toBe(5);
    });

    test('should divide zero by a number', () => {
      expect(calculator.divide(0, 5)).toBe(0);
    });

    test('should divide decimal numbers', () => {
      expect(calculator.divide(7.5, 2.5)).toBe(3);
    });

    test('should throw error when dividing by zero', () => {
      expect(() => calculator.divide(5, 0)).toThrow('Cannot divide by zero');
    });

    test('should throw error when dividing zero by zero', () => {
      expect(() => calculator.divide(0, 0)).toThrow('Cannot divide by zero');
    });

    test('should handle very small divisors (not zero)', () => {
      expect(calculator.divide(1, 0.0001)).toBeCloseTo(10000, 0);
    });
  });

  // Integration Tests - Example Operations from Image
  describe('Integration Tests (Operations from Image)', () => {
    test('should calculate 2 + 3 = 5', () => {
      expect(calculator.add(2, 3)).toBe(5);
    });

    test('should calculate 10 - 4 = 6', () => {
      expect(calculator.subtract(10, 4)).toBe(6);
    });

    test('should calculate 45 * 2 = 90', () => {
      expect(calculator.multiply(45, 2)).toBe(90);
    });

    test('should calculate 20 / 5 = 4', () => {
      expect(calculator.divide(20, 5)).toBe(4);
    });
  });

  // Edge Cases and Error Handling
  describe('Edge Cases and Error Handling', () => {
    test('should handle very large numbers in addition', () => {
      const result = calculator.add(Number.MAX_SAFE_INTEGER / 2, Number.MAX_SAFE_INTEGER / 2);
      expect(result).toBeLessThanOrEqual(Number.MAX_SAFE_INTEGER);
    });

    test('should handle precision with decimal operations', () => {
      const result = calculator.add(0.1, 0.2);
      expect(result).toBeCloseTo(0.3, 10);
    });

    test('should maintain accuracy with chained operations', () => {
      const step1 = calculator.add(5, 3); // 8
      const step2 = calculator.multiply(step1, 2); // 16
      const step3 = calculator.divide(step2, 4); // 4
      expect(step3).toBe(4);
    });

    test('should handle negative zero in subtraction', () => {
      expect(calculator.subtract(5, 5)).toBe(0);
    });

    test('should handle division of same numbers', () => {
      expect(calculator.divide(42, 42)).toBe(1);
    });
  });
});
