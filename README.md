# vLess框架部署说明
--------------------------
by Lijiliang


## 1.vLess框架的安装和使用说明
----------------------

本项目基于nodejs环境下的Gulp.JS


### 安装

* 前往 [http://nodejs.org/](http://nodejs.org/) 安装nodeJS
   - 注意系统是32位还是64位的，选择对应的版本
   - 如果是windows系统，需自行设置好环境变量，将nodejs的路径加入到系统的 `path` 环境变量中

* 安装 `gulp` 全局支持，在终端执行 `npm install -g gulp`

* 安装npm的依赖： 执行 `npm install`

* 升级自动化工具：执行 `npm update`

除此之外，还需要安装``bower``这里用bower来管理前端的通用依赖库，如jquery等
* 安装`bower` 全局支持：在终端执行 ``npm install -g bower``
* bower的使用：在终端执行``bower install``

### 目录结构
```html
├── vLess
    ├── demo         // 各种例子演示目录
    ├── dist         // gulp自动生成文件目录
    ├── doc          // 相关文档
    ├── js           // js目录
    ├── less         // 所有less存放目录
        ├── libs         // vLess基础库文件
        ├── modules      // vLess模块文件
    ├── vendor       // bower包依赖
    ├── .bowerrc     // bower所在目录配置文件
    ├── bower.json   // bower配置入口文件
    ├── gulpfile.js  // gulp启动配置入口文件
    ├── package.json // nodeJS依赖安装的包管理文件
```
默认启动开发模式
```
gulp
```