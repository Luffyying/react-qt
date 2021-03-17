#!/usr/bin/env node

/**  一个脚手架应该有的样子：
 * 1.初始化一个项目框架 qt create myProject
 *   1.1 package.json 下面的bin：配置内部命令对应的可执行文件位置
 *   1.2 类似于npm命令， qt xx xxx 则是通过不同的command配置的
 */
import { Command } from 'commander';
import { yellow } from 'chalk';
import { createApp } from './bin/create';
const program = new Command();
program.version('0.0.1');
program.command('create <app-name>').description('正在使用qt创建一个新的项目')
.action((name, cmd) => {
    // const options = cleanArgs(cmd);
    // 对于参数的控制边界
    console.log('cmd', cmd);
    console.log('name', name);
    console.log('argv', process.argv);
    if (process.argv.length) {
        console.log(
            yellow("\n Info: haha"),
        );
    }
    createApp();
})