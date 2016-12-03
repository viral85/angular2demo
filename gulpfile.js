// Package variable
var gulp = require('gulp'),
  // uglify = require('gulp-uglify'),
  sass = require('gulp-ruby-sass');
  // plumber = require('gulp-plumber'),
  // autoprefixer = require('gulp-autoprefixer'),
  // sourcemaps = require('gulp-sourcemaps'),
  // connect = require('gulp-connect');


// Source path variable
var sasspath = 'sass/**/*.scss';
  // htmlpath = 'resources/**/*.html';

// Output path variable
var csspath = 'css/';
  // jsopath = 'build/js/',
  // htmlopath = 'build/';




// Css tasks
gulp.task('sass',function(){
  sass(sasspath) //options [ nested compact expanded compressed ]
    .pipe(gulp.dest(csspath))
    console.log("completed Sass");
}); 

// gulp.task('connect', function() {
//     connect.server({
//         livereload: true
//     });
// });

// Watch task
// Watch js
gulp.task('watch',function(){
  // gulp.watch(jspath,['script']);
  gulp.watch(sasspath,['sass']);
  // gulp.watch(htmlpath,['html']);
}); 


gulp.task('default',['sass','watch']);