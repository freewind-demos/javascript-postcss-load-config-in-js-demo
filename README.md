JavaScript PostCSS Config Demo
==============================

把postcss需要的参数写在`postcss.config.js`里。

原以为这是一个非常简单的任务，后来发现postcss居然默认不支持配置文件，所以需要用到一个第三方库[postcss-load-config](https://github.com/michael-ciniawsky/postcss-load-config)读取配置。

注：`postcss-load-config`支持很多种不同格式的配置

然后还需要写一个js文件，以js代码的形式调用`postcss`和`postcss-load-config`这两个库，手动调用postcss相关方法，把options传进去。
这个过程有够麻烦的。

看来没有人这么做，应该都是结合一些其它的工具，比如webpack/gulp/grunt等使用那边的插件来处理吧。

```
npm install
npm run demo
```

它将会在`build`目录下生成经过转换之后的`hello.css`。
