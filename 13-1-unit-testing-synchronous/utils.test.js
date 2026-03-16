const test = require('node:test');
const assert = require('node:assert/strict');

const { generateRandomStringSync } = require('./utils');

test('generateRandomStringSync returns a string with requested length', () => {
  const result = generateRandomStringSync(8);

  assert.equal(typeof result, 'string');
  assert.equal(result.length, 8);
});

test('generateRandomStringSync throws when length is not a number', () => {
  assert.throws(() => generateRandomStringSync('8'), /Length must be a number/);
});

test('generateRandomStringSync throws when length is less than 1', () => {
  assert.throws(() => generateRandomStringSync(0), /Length must be at least 1/);
});
