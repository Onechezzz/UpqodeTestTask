'use strict';
var gulp = require('gulp'),
  watch = require('gulp-watch'),
  prefixer = require('gulp-autoprefixer'),

  uglify = require('gulp-uglify-es').default,
  terser = require('gulp-terser'),
  sass = require('gulp-sass'),
  sourcemaps = require('gulp-sourcemaps'),
  plumber = require('gulp-plumber'),
  rigger = require('gulp-rigger'),
  concat = require('gulp-concat'),
  cssmin = require('gulp-minify-css'),
  rimRaf = require('rimraf'),
  browserSync = require('browser-sync'),
  reload = browserSync.reload;

var path = {

  build:{
    html: 'build/',
    js:'build/js/',
    css:'build/css/'
  },
  src:{
    html: 'src/*.html',
    js:'src/js/main.js',
    style:'src/css/*.scss',

  },
  watch:{
    html:'src/*.html',
    js: 'src/js/**/*.js',
    style:'src/css/*.scss',

  },
  clean: './build'
};

  gulp.task("webserver", function () {
    browserSync({
      server: {
        baseDir: "./build"
      },
      host: 'localhost',
      port: 3000,
      tunnel:true
    });
  });

  gulp.task('html:build', function () {

  return gulp.src(path.src.html) // выбор всех html файлов по указанному пути
    .pipe(plumber()) // отслеживание ошибок
    .pipe(rigger()) // импорт вложений
    /*.pipe(concat('index.html'))*/
    .pipe(gulp.dest(path.build.html))
     // выкладывание готовых файлов
    .pipe(browserSync.reload({ stream: true })); // перезагрузка сервера
});
  gulp.task('js:build',function(){
    return gulp.src(path.src.js)
    .pipe(rigger()) // импорт вложений*/
      /*.pipe(concat('main.js'))*/
     .pipe(sourcemaps.init())
     .pipe(terser())
     .pipe(sourcemaps.write())
    .pipe(gulp.dest(path.build.js))
    .pipe(browserSync.reload({ stream: true }));
});
  gulp.task('style:build', function(){
    gulp.src(path.src.style) //
    .pipe(rigger())
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(prefixer())
    .pipe(cssmin())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(path.build.css))
    .pipe(browserSync.reload({ stream: true }));
});

const sassfiles = '**/*.scss';

gulp.task('sass', function(){
  gulp.src('./*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./'))
});
