var gulp = require('gulp');
var concat = require('gulp-concat');
let uglify = require('gulp-uglify-es').default;
var rollup = require('gulp-better-rollup')
var babel = require('rollup-plugin-babel')
var sourcemaps = require('gulp-sourcemaps');
var cssmin = require('gulp-cssmin');
var del = require('del');
 

var paths = {
  scripts: ['public/js/utils.js',
  'public/js/router.js',
  'public/js/gallery/observer.js',
	'public/js/gallery/gallery.model.js',
	'public/js/gallery/gallery.view.js',
  'public/js/gallery/gallery.controller.js',
  'public/js/login/login.model.js',
	'public/js/login/login.view.js',
	'public/js/login/login.controller.js',
	'public/js/app.js'],
  styles: ['public/css/**/*.css']
};

gulp.task('clean', function() {
  return del(['build']);
});

gulp.task('css', function() {
    return gulp.src(paths.styles)
      .pipe(concat('main.min.css'))
      .pipe(sourcemaps.init())
      .pipe(cssmin())
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('public/build/css'));
});

gulp.task('scripts', function() { 
  return gulp.src('public/js/app.js')
    .pipe(sourcemaps.init())
    .pipe(rollup({plugins: [babel()]}, 'iife'))
    .pipe(concat('app.min.js')) 
    .pipe(uglify()) 
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('public/build/js'))
});

gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['scripts']);
  gulp.watch(paths.styles, ['css']);
});
 
gulp.task('default', ['watch', 'scripts']);