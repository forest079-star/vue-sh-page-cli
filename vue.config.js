const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' 
  ? '/vue-sh-page-cli/'  // 資料夾路徑，儲存庫名稱
  : '/',
});
