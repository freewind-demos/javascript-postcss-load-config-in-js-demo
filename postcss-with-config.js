const {readFileSync, writeFileSync} = require('fs')

const postcss = require('postcss')
const loadConfig = require('postcss-load-config')

loadConfig().then(({plugins, options}) => {
    const css = readFileSync(options.from, 'utf8')
    postcss(plugins)
        .process(css, options)
        .then((result) => {
            writeFileSync(options.to, result.css)
            console.log('write to ' + options.to)
        })
})