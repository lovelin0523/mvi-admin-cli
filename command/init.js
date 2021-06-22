'use strict'
const exec = require('child_process').exec
const co = require('co')
const prompt = require('co-prompt')
const chalk = require('chalk')

module.exports = () => {
	co(function*() {
		// 处理用户输入项目名称
		let projectName = yield prompt('Project name: ')
		//模板在github的地址和分支
		let gitUrl = "https://github.com/lovelin0523/mvi-admin-template.git"
		let branch = "master"
		
		// git命令，远程拉取项目并自定义项目名
		let cmdStr = `git clone ${gitUrl} ${projectName} && cd ${projectName} && git checkout ${branch}`

		console.log(chalk.white('\n Start generating...'))

		exec(cmdStr, (error, stdout, stderr) => {
			if (error) {
				console.log(error)
				process.exit()
			}
			console.log(chalk.green('\n √ Generation completed!'))
			console.log(`\n cd ${projectName} && npm install \n`)
			process.exit()
		})
	})
}
