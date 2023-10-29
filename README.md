# weixin-h5-Vue3-vite

本项目推荐使用 `pnpm` 作为包管理器进行使用
若无 `pnpm` 请尽可能使用 `yarn` 进行使用
最后的选择才是 `npm`

请使用 **node >= 18.0.0** 运行本项目

## 模板项目内置技术栈

1. 使用 vue3+vite 作为最最基础的项目框架底层结构
2. 使用 scss 作为整个项目的样式预处理器并且实现 scss 变量 全局注入功能
3. 使用 vue-router 实现项目的路由管理，采用 hash 模式
4. 使用 pinia 作为全局数据中心，配合浏览器端的 localStorage | sessionStorage 实现数据持久化
5. 使用 dotenv 实现多环境变量隔离（具体的环境内容参考【启动命令】和【打包命令】两个小节）
6. 使用 vant4 作为移动端网页开发的 UI 组件库
7. 使用 axios 作为全局的 HTTP 请求库
8. 使用 weixin-js-sdk 接入微信生态
9. 采用 viewport 作为移动端适配方案，**请使用 375px 作为 UI 设计稿的宽度**

## 需要自己实现的功能

1. 封装 weixin-js-sdk 的操作请自己实现。
2. 封装 axios 的操作请自己实现。
3. 请将 api 接口与 axios 单独进行封装，然后在业务代码中进行引用。请勿硬编码请求操作！！！
4. 本项目没有实现路由守卫相关的功能，因为不同的项目对于页面跳转的逻辑可能不是不一样的，所以请自己实现项目对应的路由守卫逻辑

## 项目结构
```
├─public                存放一些不被编译的静态资源文件
└─src                   源代码所在区域
    ├─assets            存放被编译的静态资源文件
    ├─components        存放公共组件
    ├─router            路由配置信息
    ├─store             数据中心配置信息
    │  └─modules        单独的数据中心的存放位置
    ├─style             存放一些全局 scss 变量的位置
    └─views             存放页面文件的地方
        ├─About         About页面文件夹
        └─Home          Home页面文件夹
├─.env.development      开发环境变量存储文件
├─.env.production       生产环境变量存储文件
├─.env.test             测试环境变量存储文件
├─.eslintignore         eslint 忽略文件
├─.eslintrc.js          eslint 配置文件
├─.gitignore            git 忽略文件
├─.prettierignore       prettier忽略文件
├─index.html            首页文件
├─package.json          项目配置文件
├─pnpm-lock.yaml        pnpm 锁定文件
├─yarn.lock             yarn 锁定文件
├─package-lock.json     npm 包锁定文件
├─postcss.config.js     postcss 配置文件
├─prettier.config.js    prettier 配置文件
├─README.md             项目说明文件
├─vite.config.js        vite 配置文件
```

## 启动命令

```bash
# 安装依赖
npm install
yarn
pnpm i

# 启动项目
npm run dev
yarn dev
pnpm dev

# 启动测试环境
npm run dev:test
yarn dev:test
pnpm dev:test

# 启动正式环境
npm run dev:prod
yarn dev:prod
pnpm dev:prod
```

## 打包命令

```bash
# 打包测试服
npm run build:test
yarn build:test
pnpm build:test

# 打包正式服
npm run build:prod
yarn build:prod
pnpm build:prod
```
