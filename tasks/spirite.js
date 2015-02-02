'use strict';

module.exports = function (grunt) {
  grunt.config(
    'sprite', {
    app: {
      src: ['build/icons/**.png'],
      destImg: 'app/img/sprite.png',
      destCSS: 'build/styles/_sprite.scss',
      imgPath: '../img',
      algorithm: 'top-down',
      padding: 35,
      engine: 'phantomjs',
      cssFormat: 'scss',
      imgOpts: {
        quality: 90
      }
    }
  });
};
