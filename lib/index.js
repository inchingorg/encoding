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
    .description('Encode string data')
    .alias('e')
    .option('-c, --encoding [encoding]', 'Encoding method, default utf-8', "utf-8")
    .option('-f, --format [format]', 'Output format style, options are hex|compress|map|array, hex is default.', "/^(hex|compress|map)", 'hex')
    .action(function (data) {
        var result = encode(data, this.encoding, this.format);
        console.log(result);
    });

program.command('decode <data>')
    .description('Decode string data')
    .option('-c, --encoding [encoding]', 'Encoding to be converted from, default utf-8', "utf-8")
    .alias('d')
    .action(function (data) {
        decode.call(this, data);
    });

// 转码
program.command('convert <data>')
    .description('Decode string data')
    .option('-f, --from [encoding]', 'Encoding to be converted from, default utf-8', "utf-8")
    .option('-t, --to [encoding]', 'Encoding to be converted to, default utf-8', "utf-8")
    .alias('d')
    .action(function () {

    });

// 解码
function decode(data) {
    var data = data.replace(/[ ,\[\]]|0[xX]/g, '');
    var buf = Buffer.from(data, 'hex');
    var result = iconv.decode(buf, this.encoding);
    console.log(result + '\r\n');
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


