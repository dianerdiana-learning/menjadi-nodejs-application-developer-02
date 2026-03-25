const test = require('node:test');
const assert = require('node:assert/strict');

const { generateRandomStringProm } = require('./utils');

test('generateRandomStringProm resolves with a string of requested length', async () => {
  const result = await generateRandomStringProm(8);

  assert.equal(typeof result, 'string');
  assert.equal(result.length, 8);
});

test('generateRandomStringProm rejects when length is not a number', async () => {
  await assert.rejects(
    generateRandomStringProm('8'),
    /Length must be a number/,
  );
});

test('generateRandomStringProm rejects when length is less than 1', async () => {
  await assert.rejects(
    generateRandomStringProm(0),
    /Length must be greater than 0/,
  );
});
