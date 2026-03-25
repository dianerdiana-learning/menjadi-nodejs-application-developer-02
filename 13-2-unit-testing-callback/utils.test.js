const test = require('node:test');
const assert = require('node:assert/strict');

const { generateRandomString } = require('./utils');

test('generateRandomString returns a string with requested length', async () => {
  await new Promise((resolve, reject) => {
    generateRandomString(8, (error, result) => {
      try {
        assert.ifError(error);
        assert.equal(typeof result, 'string');
        assert.equal(result.length, 8);
        resolve();
      } catch (testError) {
        reject(testError);
      }
    });
  });
});

test('generateRandomString returns error when length is not a number', async () => {
  await new Promise((resolve) => {
    generateRandomString('8', (error) => {
      assert.match(error.message, /Length must be a number/);
      resolve();
    });
  });
});

test('generateRandomString returns error when length is less than 1', async () => {
  await new Promise((resolve) => {
    generateRandomString(0, (error) => {
      assert.match(error.message, /Length must be greater than 0/);
      resolve();
    });
  });
});
