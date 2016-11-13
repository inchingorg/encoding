/**
 * Created by feiqiang on 2016/11/13.
 */

var assert = require('assert');
var program = require('../lib');

it('encode help', function () {
    console.log(program.commands[0].outputHelp());
});

it('decode help', function () {
    console.log(program.commands[1].outputHelp());
});

it('help', function () {
    console.log(program.outputHelp());
});
