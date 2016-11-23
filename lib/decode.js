/**
 * Created by feiqiang on 2016/11/12.
 */

var program = require('commander'),
    iconv = require('iconv-lite'),
    hex = require('hex');


module.exports = program;

// 编码
program.arguments('<data>')
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
        var buf = iconv.encode(data, this.encoding);
        var result = iconv.decode(buf, 'base64');

        console.log(result);
    });


// 解码
function decode(data, encoding) {
    if (!iconv.encodingExists(encoding)) {
        console.log('"' + encoding + '"' + 'is not supported');
        return;
    }

    data = data.replace(/[ ,\[\]]|0[xX]/g, '');
    var buf = Buffer.from(data, 'hex');


    return iconv.decode(buf, encoding);
}



