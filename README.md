# ionic-base-app
如有疑问，欢迎联系（QQ：2324607198）.请发邮件，描述你的问题（截图+文字描述）。

该文档链接已放在有道云笔记  

http://note.youdao.com/noteshare?id=047153a69ef0501a370e713d878a66e7


*可点击跳转*

###### <a id="catalogue">目录</a>
- <a href="#development">关于移动端开发使用rem需要注意的事情</a>
- <a href="#introduce">项目介绍</a>
- <a href="#technology">技术架构</a>
- <a href="#structure">项目结构说明</a>
- <a href="#branch">开发分支</a>
- <a href="#use">实现过程和使用方法</a>
- - <a href="#interceptor">http interceptor（异常返回的统一处理、塞公共header）</a>
- - <a href="#aliases">路径昵称（aliases）</a>
- - <a href="#environments">关于environments</a>
- - <a href="#httpConst">http请求地址前缀的公共变量</a>
- - <a href="#rem">rem的布局</a>
- - <a href="#loading">全局loading</a>
- - <a href="#page">新建组件</a>
- - <a href="#tab">搭建tab框架（懒加载的方式）</a>
- - <a href="#dictionary">数字字典</a>
- - <a href="#pipe">过滤器pipe</a>
- - <a href="#lodash">如何使用lodash</a>
- <a href="#android">安卓调试/打包/发布</a>
- <a href="#tools">一些好用的工具</a>

## <a id="development">关于移动端开发使用rem需要注意的事情</a>

- 之前我写ionic的项目，老发现用rem设置字体大小，在真机都会比设计图小一像素。
原则上是，rem 用于布局，px 用于字体，配合 flex 或媒体查询做布局切换。
https://www.zhihu.com/question/39629259
- 手机屏幕尺寸大全
https://www.ubuuk.com/screen
- 流量研究院(当前的流行的手机型号、分辨率、系统)
https://mtj.baidu.com/data/mobile/device/
##  <a id="introduce">项目介绍</a>
该项目可以作为你的项目架构，进行你的项目开发。它拥有
- rem的布局方式
- 根据environments进行打包
- 路径昵称（aliases）
- http拦截器（异常返回的统一处理、全局loading）
- 以及新建使用路由懒加载page（tabs切换方式、以及nav跳转方式）
- 数字字典
- 过滤器pipe
- ionic的UI组件使用范例
- ionic中Packaging Native 的使用（调取相机拍摄、获取版本号）
- 使用响应式表单
- 创建自定义组件库例子（自定义单选，应用于响应式表单的元素）
- 以及打包发布安卓安装包。
- 至于发布ios到app store，可能后续会用虚拟机搭建mac系统进行说明

该项目正在开发中，具体开发计划请查阅 任务计划.xlsx

##  <a id="technology">技术架构</a>
- 本项目采用ionic4+Angular7进项开发，使用了数据智汇中的微博的API。后续还会持续跟进官方发布，更新ionic和angular。

- <a href="#catalogue">目录

##  <a id="structure">项目结构说明</a>
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

- <a href="#catalogue">目录

##  <a id="branch">开发分支</a>
- master分支   为主分支
- floor分支    该分支主要用于搭建项目的基础架构
- R1.0.0    业务开发分支
- <a href="#catalogue">目录

##  <a id="use">实现过程和使用方法</a>

###  <a id="interceptor">http interceptor（异常返回的统一处理、塞公共header）</a>
- 相关文件
ionic-reader-app\src\app\core\interceptor.module.ts
- <a href="#catalogue">目录

###  <a id="environments">关于environments</a>
- 相关文件

ionic-reader-app\src\environments

ionic-reader-app\angular.json

- 如何使用

默认引用ionic-reader-app\src\environments\environment.ts

使用以下命令则引用environment.prod.ts
```
ionic build --prod
```
- <a href="#catalogue">目录

###  <a id="aliases">路径昵称（aliases）</a>
- 相关文件

ionic-reader-app\config\webpack.config.js

ionic-reader-app\tsconfig.json

- 使用方法

在.ts中，将原来的相对路径，可以替换为@...,例如
```
import { serverUrl, appKey } from '../../../environments/environment';

替换为
import { serverUrl, appKey } from '@env';

```

- <a href="#catalogue">目录


###  <a id="httpConst">http请求地址前缀的公共变量</a>
- 添加位置

ionic-reader-app\src\environment

- 如何使用

引入
```
import { serverUrl, appKey } from '@env';
```
使用
```
getType(): Observable < {} > {
  const url = `${serverUrl.portal}weibo/type`;
  return this.http.get(
    `${url}?appKey=${appKey}`
  );
}
```
- <a href="#catalogue">目录

### <a id="rem">rem的布局</a>
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
- <a href="#catalogue">目录
###  <a id="loading">全局loading</a>
- 相关文件

ionic-reader-app\src\app\core\interceptor.module.ts

ionic-reader-app\src\shared\loading\loading.service.ts


封装了一个LoadingService类，达到全局loading只能显示一个的目的

- <a href="#catalogue">目录

### <a id="page">新建组件</a> 
```
ionic g page pages/tabs
ionic g page pages/user
ionic g page pages/collect
```
- <a href="#catalogue">目录

###  <a id="tab">搭建tab框架（懒加载的方式）</a>
https://ionicacademy.com/ionic-routing-navigation/

- 相关文件

ionic-reader-app\src\app\pages\tabs
- <a href="#catalogue">目录

###  <a id="dictionary">数字字典</a>

- 相关文件

ionic-reader-app\src\shared\constants\supporting-data.constants.ts

ionic-reader-app\src\shared\constants\constants.service.ts


ionic-reader-app\src\shared\shared.module.ts

- 使用方法

在.page.ts中，引入并且注入ConstantService，就可以使用
```
import { Component } from '@angular/core';

import { ConstantService } from '@shared/constants/constants.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [ConstantService]
})
export class HomePage  {
  TypeArr = this.constantService.getSupprotingData('TypeArr'); // 获取数据字典数据
  constructor(private constantService: ConstantService) {
  }
}

```
- <a href="#catalogue">目录



###  <a id="pipe">过滤器pipe</a>
- 相关文件

ionic-reader-app\src\shared\pipe

- 使用方法

在module.ts中，引入SahredModule
```
import { SahredModule } from '@shared/shared.module';


@NgModule({
  imports: [
    SahredModule
  ]
})
```

在html中使用，
```
<ul class="title">
    <li *ngFor="let item of typeArrList">
      {{item|filterData:TypeArr}}
    </li>
  </ul>
```

- <a href="#catalogue">目录



### <a id="lodash">如何使用lodash</a> 
- lodash官网 https://lodash.com/
- 在项目中的使用，

引入
```
declare const require: any;
const _ = require('lodash');
```

使用
```
const eventCopy = _.clone(event);
```
- <a href="#catalogue">目录


### <a id="android">安卓调试/打包/发布</a> 
- 真机调试
 1》 使用安卓手机，连接数据线。打开USB调试。
 2》根目录下面执行以下代码
 ```
 cordova run android
 ```
 - 使用谷歌找bug
 1》打开google chrome浏览器，输入
```
chrome://inspect/#devices
```
 - 打包安卓测试包
 ```
 ionic cordova build android --prod
 ```
 - 打包正式包并发布
 
 1》打包命令
```
ionic cordova build android --prod --release
```
2》生成签名文件   jdk方式(window)
```
keytool -genkey -v -keystore my-release-key.keystore -alias alias_name -keyalg RSA -keysize 2048 -validity 10000 
```
3》jarsigner签名
```
jarsigner -verbose -keystore my-release-key.keystore -signedjar signed.apk android-release-unsigned.apk shiyi
```

### <a id="tools">一些好用的工具</a> 
1》 开发工具 Visual Studio Code

2》MT管理器  可以查看打包后的代码 文件管理工具和APK逆向修改神器 （安卓）

3》XCode  ios打包工具

4》Simulator ios模拟器
