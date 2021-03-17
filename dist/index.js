#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = require("commander");
var chalk_1 = require("chalk");
var create_1 = require("./bin/create");
var program = new commander_1.Command();
program.version('0.0.1');
program.command('create <app-name>').description('正在使用qt创建一个新的项目')
    .action(function (name, cmd) {
    console.log('cmd', cmd);
    console.log('name', name);
    console.log('argv', process.argv);
    if (process.argv.length) {
        console.log(chalk_1.yellow("\n Info: haha"));
    }
    create_1.createApp();
});
