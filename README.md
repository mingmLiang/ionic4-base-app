# ionic-base-app
如有疑问，欢迎联系本姐姐（QQ：2324607198）.请发邮件，描述你的问题（截图+文字描述）。
## 项目介绍
该项目可以作为你的项目架构，进行你的项目开发。它拥有
- rem的布局方式
- 根据environments进行打包
- http拦截器
- 以及新建使用路由懒加载page
- ionic的UI组件使用范例
- ionic中Packaging Native 的使用
- 以及打包发布安卓安装包。
- 至于发布ios到app store，可能后续会用虚拟机搭建mac系统进行说明

该项目正在开发中，具体开发计划请查阅 任务计划.xlsx
## 技术架构
- 本项目采用ionic4+Angular7进项开发，使用了数据智汇中的微博的API。后续还会持续跟进官方发布，更新ionic和angular。
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

## 部分技术实现讲解
### rem的布局
**该方法没有使用js，单纯使用scss就实现了rem布局。好处是当ionic的根的font-size改变的时候，只需要改变$vm_fontsize为该值的两倍即可。维护性高，不需要担心ionic的UI组件变形。**
- rem.scss (配置)
```
// 页面适配
// 根元素大小使用 vw 单位
$vm_fontsize: 32; // 为设计图宽度的时候，html的fontSize值.由于ionic4组件的1rem为16，为了让iphone7屏幕，font-size为16px，所以取2*16
$vm_design: 750; // 根据需要替换成设计稿的值

@function rem($px) {
  @return ($px / $vm_fontsize) * 1rem;
}
```
- 在variables.scss添加
```
// 页面适配
@import "~rem.scss";
html {
  font-size: ($vm_fontsize / $vm_design) * 100vw; // 同时，通过Media Queries 限制根元素最大最小值
  @media screen and (max-width: 320px) {
    font-size: 14px; // 320*$vm_fontsize/$vm_design ~ 13.65
  }
  @media screen and (min-width: $vm_design+'px') {
    font-size: 32px; //$vm_fontsize
  }
}
```
- 在组建中编写scss
引入rem.scss，当设计图中font-size值为20px的时候。
```
@import "~rem.scss";
.iconfont{
    font-size:rem(20);
}
```

### 搭建tab框架
https://ionicacademy.com/ionic-routing-navigation/
- 新建组件
```
ionic g page pages/tabs
ionic g page pages/user
ionic g page pages/collect
```

```
ionic g module pages/tabs/tabs.router --flat
```
