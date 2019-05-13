#### 一、React脚手架
##### 1、react脚手架说明
- 1)xxx脚手架: 用来帮助程序员快速创建一个基于xxx库的模板项目
```
- a.包含了所有需要的配置
- b.指定好了所有的依赖
- c.可以直接安装/编译/运行一个简单效果
```
- 2)react提供了一个用于创建react项目的脚手架库: create-react-app
- 3)项目的整体技术架构为:  react + webpack + es6 + eslint
- 4)使用脚手架开发的项目的特点: 模块化, 组件化, 工程化

##### 2、使用命令

```
//设置安装全局
npm install -g create-react-app
//创建名称为hello-react的脚手架
create-react-app hello-react
//进入到项目的目录
cd hello-react
//运行项目
npm start
```
##### 3、react脚手架项目结构

```
ReactNews
	|--node_modules---第三方依赖模块文件夹
	|--public
		|-- index.html-----------------主页面
	|--scripts
		|-- build.js-------------------build打包引用配置
	|-- start.js-------------------start运行引用配置
	|--src------------源码文件夹
		|--components-----------------react组件
		|--index.js-------------------应用入口js
	|--.gitignore------git版本管制忽略的配置
	|--package.json----应用包配置文件 
	|--README.md-------应用描述说明的readme文件
```

##### 4、WebStorm配置代码模板

```
import React, {Component} from 'react'

export default class $className$ extends Component {

    render() {
        return(
            <div>

            </div>
        )
    }
}
```
