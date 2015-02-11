/*******************************
             Docs
*******************************/

/* Paths used for "serve-docs" and "build-docs" tasks */
module.exports = {
  base: '',
  paths: {
    source: {
      config      : 'src/theme.config',
      definitions : 'src/definitions',
      site        : 'src/site',
      themes      : 'src/themes'
    },
    output: {
      less         : '../docs/out/src',
      packaged     : '../docs/out/dist',
      uncompressed : '../docs/out/dist/components',
      compressed   : '../docs/out/dist/components',
      themes       : '../docs/out/dist/themes'
    },
    clean: '../docs/out/dist/'
  }
};