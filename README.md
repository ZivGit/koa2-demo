## 安装

Koa 依赖 node v7.6.0 或 ES2015及更高版本和 async 方法支持.

你可以使用自己喜欢的版本管理器快速安装支持的 node 版本：

```
$ nvm install 7
```

## 使用 Babel 实现 Async 方法

要在 node < 7.6 版本的 Koa 中使用 async 方法, 我们推荐使用 [babel's require hook](http://babeljs.io/docs/usage/babel-register/).

```js
require('babel-register');
// 应用的其余 require 需要被放到 hook 后面
const app = require('./app');
```

要解析和编译 async 方法, 你至少应该有 [transform-async-to-generator](http://babeljs.io/docs/plugins/transform-async-to-generator/) 或 [transform-async-to-module-method](http://babeljs.io/docs/plugins/transform-async-to-module-method/) 插件.

例如, 在你的 .babelrc 文件中, 你应该有:

```json
{
  "plugins": ["transform-async-to-generator"]
}
```

你也可以用 [env preset](http://babeljs.io/docs/plugins/preset-env/) 的 target 参数 "node": "current" 替代.

如果你觉得以上tips无法完成，可选快捷键一步完成 <kbd>cmd</kbd>+<kbd>q</kbd>