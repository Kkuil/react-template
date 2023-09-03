# React Template 🚀

该项目是一个基于 React 的前端模板，使用了以下技术和工具进行开发和构建。

## 技术栈

- ⚛️ React：使用 React 进行开发。
- 📝 TypeScript：使用强类型的 TypeScript 语言。
- 📦 Create React App：使用 Create React App 进行项目初始化和构建。
- 🌐 React Router：使用 React Router 进行路由管理。
- 🏗️ Redux Toolkit：使用 Redux Toolkit 进行状态管理。
- 🎨 Ant Design：使用 Ant Design 提供的组件进行页面设计和布局。
- 📜 Git：使用 Git 进行版本控制。
- 🎣 Git Hooks：使用 Git Hooks 进行代码提交前的钩子操作。
- 🌐 Axios：使用 Axios 进行网络请求。
- 📚 Lodash：使用 Lodash 提供更多实用的工具函数。
- 🌳 Immer：使用 Immer 进行不可变数据的处理。
- 🎨 SCSS：使用 SCSS 作为 CSS 预处理器。
- ✨ Eslint：使用 Eslint 进行代码检查。
- 🐶 Prettier：使用 Prettier 进行代码美化。

![react](https://img.shields.io/badge/react-17.0.2-blue)
![typescript](https://img.shields.io/badge/typescript-4.4.4-blue)
![create-react-app](https://img.shields.io/badge/create--react--app-5.0.0-red)
![react-router](https://img.shields.io/badge/react--router-6.2.1-lightblue)
![redux-toolkit](https://img.shields.io/badge/redux--toolkit-1.6.2-green)
![ant-design](https://img.shields.io/badge/ant--design-4.16.13-orange)
![git](https://img.shields.io/badge/git-2.33.0-red)
![husky](https://img.shields.io/badge/husky-7.0.4-yellow)
![axios](https://img.shields.io/badge/axios-0.24.0-purple)
![lodash](https://img.shields.io/badge/lodash-4.17.21-lightgrey)
![immer](https://img.shields.io/badge/immer-9.0.6-blueviolet)
![scss](https://img.shields.io/badge/scss-1.37.5-pink)
![eslint](https://img.shields.io/badge/eslint-8.6.0-brightgreen)
![prettier](https://img.shields.io/badge/prettier-2.5.1-orange)

## 开发环境要求

- 📌 Node.js：请确保你的 Node.js 版本在 14.x 以上。
- 📌 NPM：请确保你的 NPM 版本在 7.x 以上。

## 初始化项目

克隆或下载该项目后，进入项目根目录，执行以下命令来安装依赖：

```shell
npm install
```

## 目录树形结构

```
├── public/                        # 静态资源目录
│   ├── favicon.ico                # 网站图标
│   ├── index.html                 # HTML 模板
├── src/                           # 源代码目录
│   ├── assets/                    # 静态资源
│   ├── components/                # 公共组件
│   ├── hooks/                     # 自定义 Hooks
│   ├── views/                     # 页面视图
│   ├── store/                     # 状态管理
│   ├── utils/                     # 工具函数
│   ├── App.tsx                    # 根组件
│   └── main.tsx                   # 入口
├── .eslintrc.js                   # Eslint 配置
├── .gitignore                     # Git 忽略文件配置
├── .prettierrc.js                 # Prettier 配置
├── package.json                   # 项目配置
└── README.md                      # 项目说明文件
```

## 使用流程

1. 初始化项目（参考上述步骤）。
2. 开发你的应用，根据需要修改或添加组件、页面、样式等。
3. 在 `src/pages` 目录中添加你的页面视图组件。
4. 在 `src/store` 目录中使用 Redux Toolkit 进行状态管理。
5. 在 `src/styles` 目录中编写你的样式文件，支持 SCSS 预处理器。
6. 使用 Axios 发起网络请求，具体使用方式请参考 [Axios 文档](https://axios-http.com/docs/intro)。
7. 使用 Lodash 进行数据操作和处理，具体使用方式请参考 [Lodash 文档](https://lodash.com/docs)。
8. 使用 Ant Design
   提供的组件进行页面布局和设计，具体使用方式请参考 [Ant Design 文档](https://ant.design/docs/react/introduce-cn)。
9. 使用 ESLint 进行代码检查，确保代码质量，具体配置请参考 `.eslintrc.js` 文件。
10. 使用 Prettier 进行代码美化，确保代码风格统一，具体配置请参考 `.prettierrc.js` 文件。
11. 在开发过程中使用 Git
    进行版本控制，确保代码的可追踪性和团队协作。具体使用方式请参考 [Git 文档](https://git-scm.com/doc)。
12. 在开发过程中，可以使用 Git Hooks 进行钩子操作，例如在提交代码前进行代码格式化和代码检查，具体配置请参考 `.husky`
    目录下的钩子脚本。
13. 在完成开发后，可以使用 Create React App 提供的打包构建工具进行项目的构建。具体使用方式请参考 Create React App 的官方文档。

## 开发注意事项

- 确保你的项目使用了 React 18.x 的版本。
- 使用 TypeScript 进行开发，提高代码的可读性和维护性。
- 在开发过程中，推荐使用 VS Code 编辑器，并安装相关插件，例如 ESLint、Prettier，以提升开发效率。
- 遵循 Git 的代码提交规范，使用语义化的提交信息，方便版本管理和发布。

## 使用方法

1. 安装依赖：

```shell
npm install
```

2. 启动开发服务器：

```shell
npm start
```

3. 在浏览器中打开 [http://localhost:3000](http://localhost:3000) 进行开发。

4. 构建项目：

```shell
npm run build
```

5. 构建完成后，可以在 `build` 目录中找到构建后的文件。

## 贡献

欢迎贡献代码，提出问题和建议。请在提交代码前确保通过了 ESLint 的代码检查。

## 许可证

本项目基于 MIT 许可证开源。

## 鸣谢

感谢以下开源项目的贡献：

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Create React App](https://create-react-app.dev/)
- [React Router](https://reactrouter.com/)
- [Redux Toolkit](https://redux.js.org/usage/usage-with-typescript)