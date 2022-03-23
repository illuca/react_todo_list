const{ createProxyMiddleware} = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(
        createProxyMiddleware('/githubAPI', {
            target: 'http://localhost:5000',
            changeOrigin: true,
            pathRewrite: {'^/githubAPI': ''}
        })
    )
}