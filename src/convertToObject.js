'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const sourceStyle = sourceString.split(';');
  const style = {};

  Object.create(style);

  sourceStyle.forEach((source) => {
    const data = source.split(':');

    if (data[0].trim()) {
      const key = data[0].trim();
      const value = data[1];

      const s = value;
      let result;

      if (!s.includes(',')) {
        result = typeof s === 'string' ? s.replace(/[\t\n]/g, '').trim() : null;
        style[key] = result;
      } else {
        style[key] =
          typeof s === 'string' ? s.replace(/[\t\n]/g, '\n').trim() : null;
      }
    }
  });

  return style;
}

// function isLetter(str) {
//   return str.length === 1 && str.match(/[a-z]/i);
// }

module.exports = convertToObject;
