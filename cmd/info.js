let projectInfo = require('../package')
// 第三方插件 - 终端语句样式库
const chalk = require('chalk');

function logInfo (){
    // 打印版本信息
    console.log(chalk.blue('\n😶 @democli v' + projectInfo.version));
    console.log(chalk.blue(projectInfo.description))

    // 打印一个小火车
    console.log(chalk.gray('     _                                               _       _'))
    console.log(chalk.gray('  __| |    ___    _ __     ___      o O O   __      | |     (_)'))
    console.log(chalk.gray(" / _` |   / -_)  | '  \\   / _ \\    o       / _|     | |     | |"))
    console.log(chalk.gray(" \\__,_|   \\___|  |_|_|_|  \\___/   _T__[O]  \\__|_   _|_|_   _|_|_"))
    console.log(chalk.gray('_|"""""|_|"""""|_|"""""|_|"""""| {======|_|"""""|_|"""""|_|"""""|'))
    console.log(chalk.gray('"`-0-0-\'\"`-0-0-\'\"`-0-0-\'\"\`-0-0-\'./o--000\'\"\`-0-0-\'\"\`-0-0-\'\"\`-0-0-\''))

    // 打印一下自恋的作者
    console.log(chalk.gray('\n                  _           _     _'))
    console.log(chalk.gray('                 | |         (_)   | |'))
    console.log(chalk.gray('  ___ _   _ _ __ | |__  _   _ _ ___| |__   ___'))
    console.log(chalk.gray(" / __| | | | '_ \\| '_ \\| | | | |_  / '_ \\ / _ \\"))
    console.log(chalk.gray(' \\__ \\ |_| | | | | | | | |_| | |/ /| | | |  __/'))
    console.log(chalk.gray(' |___/\\__,_|_| |_|_| |_|\\__,_|_/___|_| |_|\\___|\n'))

    console.log(chalk.gray('\n图案字符生成工具：http://patorjk.com/software/taag/#p=display&f=Train&t=demo%20cli'))
}

module.exports = logInfo
