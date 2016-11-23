/**
 * Created by feiqiang on 2016/11/12.
 */

var program = require('commander'),
    iconv = require('iconv-lite'),
    formatUtil = require('./format'),
    hex = require('hex');


module.exports = program;

// 编码
program.command('encode <data>')
    .description('Encode string to bytes')
    .alias('e')
    .option('-c, --encoding [encoding]', 'Encoding, default utf-8', "utf-8")
    .option('-f, --format [format]', 'Output format style, options are hex|compress|map|array, hex is default.', "/^(hex|compress|map)", 'hex')
    .action(function (data) {
        var result = encode(data, this.encoding, this.format);
        console.log(result);
    });

program.command('decode <data>')
    .description('Decode bytes to string')
    .alias('d')
    .option('-c, --encoding [encoding]', 'Encoding, default utf-8', "utf-8")
    .action(function (data) {
        var result = decode(data, this.encoding);
        console.log(result);
    });

// 转码
program.command('base64 <data>')
    .description('Convert .')
    .alias('b')
    .option('-c, --encoding [encoding]', 'Encoding, default utf-8', "utf-8")
    .action(function (data) {
        var buf =iconv.encode(data, this.encoding);
        var result = iconv.decode(buf, 'base64');

        console.log(result);
    });


// 解码
function decode(data, encoding) {
    if (!iconv.encodingExists(encoding)) {
        console.log('"' + encoding + '"' + 'is not supported');
        return;
    }

    if (encoding.toLowerCase() === 'base64') {
        var buf =iconv.encode(data, this.encoding);
        var result = iconv.decode(buf, 'base64');
    }

    data = data.replace(/[ ,\[\]]|0[xX]/g, '');
    var buf = Buffer.from(data, 'hex');


    return iconv.decode(buf, encoding);
}

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
        case 'pretty': {
            resultBuffer.toString('hex');
            result = formatUtil.pretty(compressedString);
            break;
        }
        case 'map': {
            result = formatUtil.hexMap(resultBuffer);
            break
        }
        case 'array': {
            result = formatUtil.array(compressedString);
            break;
        }
        case 'hex': {
            result = compressedString;
            break;
        }
        default: {
            result = compressedString;
            break;
        }
    }

    return result;
}


function convert(str, to, from) {
    if (to === 'UTF-8') {
        return iconv.decode(str, from);
    } else if (from === 'UTF-8') {
        return iconv.encode(str, to);
    } else {
        return iconv.encode(iconv.decode(str, from), to);
    }
}


