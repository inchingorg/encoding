/**
 * Created by feiqiang on 2016/11/12.
 */

var program = require('commander'),
    iconv = require('iconv-lite'),
    util = require('./util');

module.exports = program;

// 编码
program.command('encode <data>')
    .description('Encode string data')
    .alias('e')
    .option('-c, --encoding [encoding]', 'Encoding method, default utf-8', "utf-8")
    .option('-o, --output [encoding]', 'Output encoding, default utf-8', "utf-8")
    .action(function (data) {
        var result = iconv.encode(data, this.encoding).toString('hex');
        console.log(util.format(result));
    });

// 解码
program.command('decode <data>')
    .description('Decode string data')
    .option('-c, --encoding [encoding]', 'Encoding to be converted from, default utf-8', "utf-8")
    .alias('d')
    .action(function (data) {
        var data = data.replace(/ /g, '');
        var buf = Buffer.from(data, 'hex');
        var result = iconv.decode(buf, this.encoding);
        console.log(result);
    });

// 转码
program.command('convert <data>')
    .description('Decode string data')
    .option('-f, --from [encoding]', 'Encoding to be converted from, default utf-8', "utf-8")
    .option('-t, --to [encoding]', 'Encoding to be converted to, default utf-8', "utf-8")
    .alias('d')
    .action(function () {

    });

function convert(str, to, from) {
    if (to === 'UTF-8') {
        return iconv.decode(str, from);
    } else if (from === 'UTF-8') {
        return iconv.encode(str, to);
    } else {
        return iconv.encode(iconv.decode(str, from), to);
    }
}


