var path = require('path');
var util = require('util');

var chalk = require('chalk');
var yosay = require('yosay');
var Generator = require('yeoman-generator');

// 导出模块，使得yo xxx能够运行
module.exports = class extends Generator {
  initializing() {
    this.props = {};
  }
  // 询问用户，根据答案生成不同模板的脚手架
  prompting() {
    var questions = [
      {
        type: 'input',
        name: 'name',
        message: 'package name',
        default: 'new-project',
      },
      {
        type: 'input',
        name: 'version',
        message: 'version',
        default: '0.0.1',
      },
      {
        type: 'input',
        name: 'description',
        message: 'description',
        default: 'a vue project ...',
      },
      {
        type: 'input',
        name: 'author',
        message: 'author',
        store: true, // 记住用户的选择
        default: 'souse',
      },
    ];

    return this.prompt(questions).then(function(answers) {
      for (var item in answers) {
        // 把answers里的内容绑定到外层的this，便于后面的调用
        answers.hasOwnProperty(item) && (this.props[item] = answers[item]);
      }
    }.bind(this));
  }
  // 拷贝文件，搭建脚手架
  writing() {
    const files = [
      'public', 
      'src', 
      'tests', 
      '.browserslistrc', 
      '.eslintrc.js', 
      '.gitignore',
      'babel.config.js',
      'package-lock.json',
      'package.json',
      'postcss.config.js',
      'README.md',
      'vue.config.js'
    ];
    
    for (var i = 0; i < files.length; i++) {
      var f = files[i];

      if (f == '.gitignore') {
        var file = this.templatePath('.npmignore');

        if (file) {
          this.fs.copy(this.templatePath('.npmignore'), this.destinationPath('.gitignore'));
        } else {
          this.fs.copy(this.templatePath(f), this.destinationPath(f));  
        }
        continue;
      }

      this.fs.copy(this.templatePath(f), this.destinationPath(f));
    }

    // copyTpl 可以渲染变量
    this.fs.copyTpl(this.templatePath('package.json'), this.destinationPath('package.json'), {
      name: this.props.name,
      version: this.props.version,
      description: this.props.description,
      author: this.props.author,
    });
  }
  // 安装依赖 如果不需要安装依赖可以注销此方法
  
  /**
  install() {
    this.installDependencies({
      npm: { force: true },
      yarn: false
    });
  }
  **/

  // 生成脚手架后，进行的一些处理
  end() {
    this.log(yosay('Your app has been created successfully!'));
  }
};
