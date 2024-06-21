const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://tasty-4.onrender.com',
            changeOrigin: true,
        })
    );
};
