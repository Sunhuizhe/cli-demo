#!/usr/bin/env node

const cmdInfo = require('../cmd/info')
const cmdHelp = require('../cmd/help')
const initProject = require('../cmd/init')
const { program } = require('commander')
const projectInfo = require('../package')

program.version(projectInfo.version, '-v, --version', 'output the version number')  // 版本信息
    .option('-h, --help', 'output usage information', cmdHelp)  // 打印帮助信息
    .option('-i, --info', 'output project information', cmdInfo);

program
    .command('init <name> [description]')
    .alias('i') // 简写
    .description('生成demo-cli项目架构')
    .action((name, description) => {
        initProject(name, description);
    });

program.parse(process.argv);

let cmdArgv = process.argv[2]
// 处理命令行参数

// switch (cmdArgv) {
//     // options
//     case '-v' || '--version':
//         cmdInfo();
//         break;
//     case '-h' || '--help':
//         cmdHelp();
//         break;
//     // commands
//     case 'init':
//         initProject(cmdArgv);
//         break;
//     default:
//         cmdInfo();
//         break;
// }