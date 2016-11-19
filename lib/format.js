/**
 * Hex string formatter.
 */

var hex = require('hex');


/**
 * 十六进制以空格分开。
 *
 * @example
 *
 * 120e320a -> 12 0e 32 0a
 *
 * @param hexString
 * @returns {string|undefined}
 */
exports.pretty = function (hexString) {
    if (!hexString || hexString.length === 0) {
        return;
    }

    let output = '';

    for (let i = 0; i < hexString.length; i++) {
        output += hexString[i];
        if (i % 2 != 0 && i < hexString.length - 1) {
            output += ' ';
        }
    }

    return output;
};

/**
 * Print buffer to hex map.
 *
 * @see [gagle/node-hex: Pretty-prints a Buffer.](https://github.com/gagle/node-hex)
 * @param buffer
 *
 */
exports.hexMap = function (buffer) {
    return hex(buffer);
};

exports.array = function (hexString) {
    if (!hexString || hexString.length === 0) {
        return;
    }

    let output = '[';

    for (let i = 0; i < hexString.length; i++) {
        if (i % 2 == 0) {
            output += '0x';
        }

        output += hexString[i];

        if (i % 2 != 0 && i < hexString.length - 1) {
            output += ', ';
        }
    }

    output += ']';

    return output;
};