let projectInfo = require('../package')

// 第三方插件 - 终端语句样式库
const chalk = require('chalk');

// 打印一下教程
module.exports = ()=>{
    console.log('\n😶 democli v' + projectInfo.version + '\n\nUsage: democli <command> [options]\n\nOptions:')
    console.log(chalk.blue( '-h, --help           output usage information'))
    console.log(chalk.white('-v, --version        output the version number'))

    console.log('\nCommands:')
    console.log(chalk.blue( 'init [projectName]   Init a project with default templete'))
}