var gulp = require('gulp');
var sass = require('gulp-sass');
var header = require('gulp-header');
var uglify = require('gulp-uglify');
var pkg = require('./package.json');

// Set the banner content
var banner = ['/*!\n',
  ' * Nicolas Pierre Consultancy- <%= pkg.title %> v<%= pkg.version %> (<%= pkg.homepage %>)\n',
  ' * Copyright 2017-' + (new Date()).getFullYear(), ' <%= pkg.author %>\n',
  ' * Licensed under <%= pkg.license %> (https://github.com/beviking/<%= pkg.name %>/blob/master/LICENSE)\n',
  ' */\n',
  ''
].join('');

gulp.task('sass', function() {
    return gulp.src('scss/beviking.scss')
      .pipe(sass())
      .pipe(header(banner, {
        pkg: pkg
      }))
      .pipe(gulp.dest('css'))
  });