var program = require('commander'),
    iconv = require('iconv-lite'),
    formatUtil = require('./format'),
    hex = require('hex');


module.exports = program;

// 编码
program.arguments('<data>')
    .description('Encode string to bytes')
    .alias('e')
    .option('-c, --encoding [encoding]', 'Encoding, default utf-8', "utf-8")
    .option('-f, --format [format]', 'Output format style, options are compressed|map|array, hex is default.', "/^(hex|compressed|map)", 'hex')
    .action(function (data) {
        var result = encode(data, this.encoding, this.format);
        console.log(result);
    });

/**
 * Encoding.
 *
 * @param encoding 编码。
 * @param format 输出格式。
 */
function encode(data, encoding, format) {
    if (!iconv.encodingExists(encoding)) {
        console.log('"' + encoding + '"' + 'is not supported');
        return;
    }

    var resultBuffer = iconv.encode(data, encoding);

    var compressedString = resultBuffer.toString('hex');
    var result;

    switch (format) {
        case 'compressed': {
            return compressedString;
            break;
        }
        case 'map': {
            result = formatUtil.map(resultBuffer);
            break
        }
        case 'array': {
            result = formatUtil.array(compressedString);
            break;
        }
        default: {
            result = formatUtil.pretty(compressedString);
            break;
        }
    }

    return result;
}