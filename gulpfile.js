'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var webpack = require('gulp-webpack');
var webpackConfig = require("./webpack.config.js");
//var karma = require('gulp-karma-runner');
//var jshint = require('gulp-jshint');
//var changed = require('gulp-changed');
//var imagemin = require('gulp-imagemin');
//var jest = require('jest');
var path = require('path');
var src ='src/main/resources/static/js';

// JS hint task
gulp.task('jshint', function() {
    gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('imagemin', function() {
    var imgSrc = 'images/**/*',
        imgDst = 'build/images';

    gulp.src(imgSrc)
        .pipe(changed(imgDst))
        .pipe(imagemin())
        .pipe(gulp.dest(imgDst));
});

gulp.task('webpack', function() {
    return gulp.src(path.join(src,'*.js'),{ base: path.resolve(src)})
        .pipe(webpack(require('./webpack.config.js')
        ))

        .pipe(gulp.dest(path.join(src,'../dist/')));


});

gulp.task('default',['webpack'],function(){

    gulp.watch('js/*.*',function(){

        gulp.run('webpack');
        // gulp.run('jest');

    });





});