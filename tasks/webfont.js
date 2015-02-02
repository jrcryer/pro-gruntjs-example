'use strict';

module.exports = function (grunt) {
  grunt.config(
    'webfont', {
    icons: {
      options: {
        font: 'custom',
        stylesheet: 'less',
        relativeFontPath: '../fonts',
        htmlDemo: false
      },
      destCss: 'build/styles/',
      src: 'build/svg/**/*.svg',
      dest: 'app/fonts'
    }
  });
};
