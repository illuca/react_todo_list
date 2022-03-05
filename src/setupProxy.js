const{ createProxyMiddleware} = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(
        createProxyMiddleware('/studentAPI', {
            target: 'http://localhost:5000',
            changeOrigin: true,
            pathRewrite: {'^/studentAPI': ''}
        }),
        createProxyMiddleware('/carAPI', {
            target: 'http://localhost:5001',
            changeOrigin: true,
            pathRewrite: {'^/carAPI': ''}
        }),
    )
}
