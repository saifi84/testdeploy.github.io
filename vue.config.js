const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: 'ip-lookup',
  transpileDependencies: [
    'vuetify'
  ]
})
