/**
 * Created by feiqiang on 2016/11/12.
 */

var program = require('commander'),
    xdata = require('@inchingorg/xdata'),
    decoder = xdata.decoder,
    encoder = xdata.encoder;


module.exports = program;

// 编码
program.command('encode <data>')
    .description('Encode string to bytes')
    .alias('e')
    .option('-c, --encoding [encoding]', 'Encoding, default utf-8', "utf-8")
    .option('-f, --format [format]', 'Output format style, options are compressed|map|array, hex is default.', "/^(hex|compressed|map)", 'hex')
    .action(function (data) {
        var buffer = encoder.encode(data, this.encoding);
        var result = encoder.format(buffer, this.format)
        console.log(result);
    });

program.command('decode <data>')
    .description('Decode bytes to string')
    .alias('d')
    .option('-c, --encoding [encoding]', 'Encoding, default utf-8', "utf-8")
    .action(function (data) {
        var result = decoder.decode(data, this.encoding);
        console.log(result);
    });

// Base64 编码
program.command('base64 <cmd> <data>')
    .description('Encode plain text string to base64.')
    .option('-c, --encoding [encoding]', 'encoding, default utf-8', "utf-8")
    .action(function (cmd, data) {
        if(cmd === 'encode' || cmd === 'e'){
            var result = xdata.base64.encode(data, this.encoding);
            console.log(result);
        }else if(cmd === 'decode' || cmd === 'd'){
            var result = xdata.base64.decode(data, this.encoding);
            console.log(result);
        }
    });