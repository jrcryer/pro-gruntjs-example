'use strict';

module.exports = function (grunt) {
  grunt.config(
    'svgsprite', {
    app : {
      options: {
        render: {
          scss: {
            dest: '../../build/styles/_font.scss'
          },
          css: false
        },
        spritedir: '',
        padding: 35,
        layout: 'vertical'
      },
      src: 'build/svg/',
      dest: 'app/img/'
    }
  });
};
