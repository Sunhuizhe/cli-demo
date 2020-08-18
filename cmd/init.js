const {resolve} = require('path')
const fs = require('fs');
// Download and extract a git repository (GitHub, GitLab, Bitbucket) from node.
const download = require('download-git-repo')
// Elegant terminal spinner
const ora = require('ora');
const log = require('./cmd-log')

module.exports = (name, description) =>{
    let dir = resolve('./')+'/'+name
    if (fs.existsSync(dir)) {
        return log.error(dir + '路径已存在');
    }
    const spinner = ora('downloading template...').start();
    download('Sunhuizhe/vue-template', dir, (err)=>{
        log.info('\n已安装至' + dir)
        spinner.stop('downloaded')
        if(err) return log.error(err);
    })
}
