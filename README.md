# ionic-base-app
## 项目介绍
该项目可以作为你的项目架构，进行你的项目开发。它拥有rem的布局方式、根据environments进行打包、http拦截器、以及新建使用路由懒加载page、ionic的UI组件使用范例、ionic中Packaging Native 的使用、以及打包发布安卓安装包。至于发布ios到app store，可能后续会用虚拟机搭建mac系统进行说明

该项目正在开发中，具体开发计划请查阅 任务计划.xlsx
## 技术架构
- 本项目采用ionic4+Angular6进项开发，使用了数据智汇中的微博的API。后续还会持续跟进官方发布，更新ionic和angular。
## 项目结构说明
```
ionic-base-app/  
|– config/  
| | – webpack.config.js  webpack的配置文件
|– e2e  测试文件
|- node_modules  依赖包文件
|– platforms/  生成android或者ios安装包需要的资源---(cordova platform add android后会生成)
| |– android/  
| |– ios/ 
|– plugins/  插件文件夹，里面放置各种cordova安装的插件
| |– org.apache.cordova.console/  
| |– org.apache.cordova.device/  
|- resources android/ios 资源（更换图标和启动动画）
| |– android/  
| |– ios/  
|- src  ionic4.x中开发工作目录，页面、样式、脚本和图片都放在这个目录下
| |– app/  
| | |– core/  核心文件（http拦截器、全局加载动画等）
| |– assets/  静态资源文件夹
| |– environments/  环境变量
| |– shared/  共享的服务组件
| |– theme/  关于主题的文件
|– .gitignore  git忽略配置 
|– angular.json  angular配置文件
|– config.xml  打包成app的配置文件 
|– ionic.config.json  ionic配置文件
|– package.json  配置项目的元数据和管理项目所需要的依赖
|– tsconfig.json  TypeScript项目的根目录，指定用来编译这个项目的根文件和编译选项
|– tslint.json  ：格式化和校验typescript
|– www/  ionic4.x中静态文件，ionic build --prod 生成的单页面静态资源文件
| |– css/  
| |– img/  
| |– js/  
|– index.html
```

## 开发分支
- master分支   为主分支
- floor分支    该分支主要用于搭建项目的基础架构
- R1.0.0    业务开发分支
