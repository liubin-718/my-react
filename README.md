1、HooksTest.js
useEffect 中写有副作用的代码：比如dom操作、setTimeout、ajax
    它的依赖更改，它内部代码才会再次执行，如果将它里面的代码放到外面
    当setState时，会从新渲染，那岂不是副作用代码会再次执行

2、安装react-app-rewired取代react-scripts 可以扩展webpack的配置
npm install react-app-rewired customize-cra babel-plugin-import -D
并且在根目录下创建config-overrides.js
并且修改package.json中运行的命令("start": "node scripts/start.js",) eg："start":"react-app-rewired start"
备注：运行npm run start后会报错，再执行 npm install react-scripts -S，再启动npm run start就好了

3、支持装饰器配置：
npm i -D @babel/plugin-proposal-decorators

4、实现自己的表单组件（LFormTest.js）
在tsconfig.json 中设置"experimentalDecorators": true, // 解除对装饰器的警报
5、弹窗类组件设计
设计思路： 弹窗类组件的要求弹窗内容在A处声明，却在B处展示
具体实现:
    方案1：Portal
    传送门，react v16之后出现的portal可以实现内容传送功能。
    方案2：unstable_renderSubtreeIntoContainer
    在v16之前，要用到react中两个秘而不宣的React API: unstable_renderSubtreeIntoContainer,unmountComponentAtNode


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
# my-react
