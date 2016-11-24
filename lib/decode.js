/**
 * Created by feiqiang on 2016/11/12.
 */

var program = require('commander'),
    iconv = require('iconv-lite'),
    hex = require('hex');


module.exports = program;

program.arguments('<data>')
    .description('Decode bytes to string')
    .alias('d')
    .option('-c, --encoding [encoding]', 'Encoding, default utf-8', "utf-8")
    .action(function (data) {
        var result = decode(data, this.encoding);
        console.log(result);
    });


function decode(data, encoding) {
    if (!iconv.encodingExists(encoding)) {
        console.log('"' + encoding + '"' + 'is not supported');
        return;
    }

    data = data.replace(/[ ,\[\]]|0[xX]/g, '');
    var buf = Buffer.from(data, 'hex');


    return iconv.decode(buf, encoding);
}



