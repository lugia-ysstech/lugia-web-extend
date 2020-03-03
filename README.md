## @lugia/lugia-web-extend 

## 此项目是介绍如何进行第三方组件开发的项目模板

### 项目目录说明

├── dist     //项目打包后文件存放路径

│ ├── designInfo.js  // 项目中所有组件信息的描述文件(必要文件)

├── public     //基础公共资源存放路径

├── scripts

│ ├── create.js   // 在打包构建时生成designInfo信息(designInfo是Mega-IDE读取组件的必要文件)

├── src // 源码目录 

│ ├── widgets // 组件目录

│ │ ├── example // 组件模板目录，详细描述了组件开发所必须的文件和属性

│ │ │ ├── demo.js  // 组件使用的示例代码(仅开发时测试使用) 

│ │ │ ├── index.js  // 组件入口文件(必要文件)

│ │ │ ├── lugia.example.zn-CN.json  // 组件描述信息文件(必要文件  文件命名为lugia.[上一级文件名].zn-CN.json)

│ │ ├── todo // Todo组件开发示例

│ │ │ ├── demo.js  // 组件使用的示例代码(仅开发时测试使用) 

│ │ │ ├── index.js  // 组件入口文件(必要文件)

│ │ │ ├── lugia.example.zn-CN.json  // 组件描述信息文件(必要文件)

│ │ │ ├── todo.js // Todo组件主要逻辑代码

│ │ ├── designInfo.js 项目中所有组件信息的描述文件(必要文件  使用 yarn dist 命令打包构建时自动生成；如需自定义打包构建命令，请确保先执行create.js或自行编写好此文件)

│ ├── App.js // 初始化路由

│ ├── index.js // 项目入口文件

│ ├── router.js // 项目路由配置文件

├── gulpfiles // 打包构建配置项

├── lugia.config.js // 组件库基础配置信息

├── package.json // 项目配置信息

├── README.md // 项目说明文档

### 使用方式

方式一：

1. 组件开发完成后，发布到npm
2. 在Mega-IDE中引入发布的包，即可在Mega-IDE中使用该组件库提供的组件

方式二：

1. 组件开发完成后，发布到npm
2. 可在任意项目中引用该组件库
