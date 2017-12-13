var gulp = require('gulp');
var sass = require('gulp-sass');
var header = require('gulp-header');
var uglify = require('gulp-uglify');
var pkg = require('./package.json');

// Set the banner content
var banner = ['/*!\n',
  ' * <%= pkg.title %> v<%= pkg.version %> (<%= pkg.homepage %>)\n',
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


  gulp.task('copy', function() {
    gulp.src([
        'node_modules/bootstrap/dist/**/*',
        '!**/npm.js',
        '!**/bootstrap-theme.*',
        '!**/*.map'
      ])
      .pipe(gulp.dest('vendor/bootstrap'))
  
    gulp.src(['node_modules/jquery/dist/jquery.js', 'node_modules/jquery/dist/jquery.min.js'])
      .pipe(gulp.dest('vendor/jquery'))
  
    gulp.src(['node_modules/magnific-popup/dist/*'])
      .pipe(gulp.dest('vendor/magnific-popup'))
  
    gulp.src(['node_modules/scrollreveal/dist/*.js'])
      .pipe(gulp.dest('vendor/scrollreveal'))
  
    gulp.src(['node_modules/jquery.easing/*.js'])
      .pipe(gulp.dest('vendor/jquery-easing'))
  
    gulp.src([
        'node_modules/font-awesome/**',
        '!node_modules/font-awesome/**/*.map',
        '!node_modules/font-awesome/.npmignore',
        '!node_modules/font-awesome/*.txt',
        '!node_modules/font-awesome/*.md',
        '!node_modules/font-awesome/*.json'
      ])
      .pipe(gulp.dest('vendor/font-awesome'))
  })