module.exports = {
    apps: [
      {
        name: 'app1',
        port: 3000,
        script: './node_modules/nuxt/bin/nuxt.js',
        args: 'dev',
        instances: 2,
        exec_mode: 'cluster'
        // env: {
        //   NODE_ENV: 'development'
        // },
        // env_production: {
        //   NODE_ENV: 'production'
        // }
      },
    ]
  };