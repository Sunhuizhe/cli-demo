// 封装一个简单的主题
const chalk = require('chalk');

module.exports = {
    error: (msg)=>{
        console.log(chalk.red('error:' + msg))
    },
    success: (msg)=>{
        console.log(chalk.green('success:' + msg))
    },
    info: (msg)=>{
        console.log(chalk.blue(msg))
    },
    warn: (msg)=>{
        console.log(chalk.yellow(msg))
    }
}