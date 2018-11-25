var gulp = require('gulp');
var watch = require('gulp-watch');
var pug = require('gulp-pug');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-csso');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('html', function(){
    return watch('markup/templates/*.pug')
        .pipe(pug())
        .pipe(gulp.dest('build/'))
});

gulp.task('css', function(){
    return watch('markup/templates/*.scss')
        .pipe(sass())
        .pipe(minifyCSS())
        .pipe(gulp.dest(''))
});

gulp.task('js', function(){
    return watch('markup/javascript/*.js')
        .pipe(sourcemaps.init())
        .pipe(concat('app.min.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('js'))
});

gulp.task('default', ['html', 'css', 'js' ]);
