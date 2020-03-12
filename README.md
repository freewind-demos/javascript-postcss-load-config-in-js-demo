JavaScript PostCSS Config Demo
==============================

把postcss需要的参数写在`postcss.config.js`里。

我原来以为postcss不支持config，发现实际上通过`--config`支持，不过要指定目录，会自动寻找其下的`postcss.config.js`.

另外，`from`和`to`不能写在配置文件里，只能写在命令行中。

```
npm install
npm run demo
```
