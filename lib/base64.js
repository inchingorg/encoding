var program = require('commander'),
    iconv = require('iconv-lite'),
    hex = require('hex');


module.exports = program;

// 编码
program.command('encode <data>')
    .description('Encode plain text string to base64.')
    .alias('e')
    .option('-c, --encoding [encoding]', 'encoding, default utf-8', "utf-8")
    .action(function (data) {
        var result = encode(data, this.encoding);
        console.log(result);
    });

program.command('decode <data>')
    .description('Decode base64 to plain text string. ')
    .alias('d')
    .option('-c, --encoding [encoding]', 'encoding, default utf-8', "utf-8")
    .action(function (data) {
        var result = decode(data, this.encoding);
        console.log(result);
    });

/**
 * Encoding.
 *
 * @param encoding 编码。
 */
function encode(data, encoding) {
    var buf = iconv.encode(data, encoding);
    return iconv.decode(buf, 'base64');
}

/**
 * 解码
 *
 * @param data
 * @param encoding
 */
function decode(data, encoding) {
    var buf = iconv.encode(data, 'base64');
    return iconv.decode(buf, encoding);
}