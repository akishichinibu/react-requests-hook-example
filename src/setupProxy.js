const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://jsonplaceholder.typicode.com',
      changeOrigin: true,
      secure: false,
      logLevel: "debug",
      pathRewrite: {
        "^/api": '/',
      }
    })
  );

  app.use(
    '/storage',
    createProxyMiddleware({
      target: 'http://ipv4.download.thinkbroadband.com',
      changeOrigin: true,
      secure: false,
      logLevel: "debug",
      pathRewrite: {
        "^/storage": '/',
      }
    })
  );
};
