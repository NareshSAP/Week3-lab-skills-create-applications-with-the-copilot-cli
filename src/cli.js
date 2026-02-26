#!/usr/bin/env node

/**
 * CLI Interface for the Node.js Calculator
 * Provides command-line access to the four basic arithmetic operations
 */

const calculator = require('./calculator');

function main() {
  const args = process.argv.slice(2);

  if (args.length < 3) {
    console.log('Usage: calculator <operation> <num1> <num2>');
    console.log('\nSupported operations:');
    console.log('  add        - Addition (+)');
    console.log('  subtract   - Subtraction (-)');
    console.log('  multiply   - Multiplication (*)');
    console.log('  divide     - Division (/)');
    console.log('\nExample: calculator add 5 3');
    process.exit(1);
  }

  const operation = args[0].toLowerCase();
  const num1 = parseFloat(args[1]);
  const num2 = parseFloat(args[2]);

  if (isNaN(num1) || isNaN(num2)) {
    console.error('Error: Both arguments must be valid numbers');
    process.exit(1);
  }

  try {
    let result;

    switch (operation) {
      case 'add':
        result = calculator.add(num1, num2);
        console.log(`${num1} + ${num2} = ${result}`);
        break;
      case 'subtract':
        result = calculator.subtract(num1, num2);
        console.log(`${num1} - ${num2} = ${result}`);
        break;
      case 'multiply':
        result = calculator.multiply(num1, num2);
        console.log(`${num1} * ${num2} = ${result}`);
        break;
      case 'divide':
        result = calculator.divide(num1, num2);
        console.log(`${num1} / ${num2} = ${result}`);
        break;
      default:
        console.error(`Error: Unknown operation '${operation}'`);
        console.log('Supported operations: add, subtract, multiply, divide');
        process.exit(1);
    }
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}

main();
