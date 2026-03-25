/**
 * @TODO
 * Buatlah fungsi `createBase64TransformStream` yang mengonversi data yang masuk menjadi base64.
 */

const { Transform } = require('stream');

function createBase64TransformStream() {
  return new Transform({
    transform(chunk, encoding, callback) {
      callback(null, chunk.toString('base64'));
    },
  });
}

module.exports = { createBase64TransformStream };
