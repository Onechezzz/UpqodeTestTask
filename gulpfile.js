const gulp = require('gulp');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');

const uglify = require('gulp-uglify-es').default;
const del = require('del');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const rigger = require('gulp-rigger');
const imagemin = require('gulp-imagemin');
//Порядок подключения css файлов
const htmlFiles = [


  './src/index.html'
]


const cssFiles = [
   './src/css/partials/map.scss',
   './src/css/partials/styles.scss'
]
//Порядок подключения js файлов
const jsFiles = [

   './src/js/partials/carousel.js',
  './src/js/partials/index.js',
  './src/js/partials/map.js',
  './src/js/partials/burger.js'
]
function html() {

return gulp.src(htmlFiles) // выбор всех html файлов по указанному пути
  .pipe(plumber()) // отслеживание ошибок
  .pipe(rigger()) // импорт вложений
  /*.pipe(concat('index.html'))*/
  .pipe(gulp.dest('./build/'))
   // выкладывание готовых файлов
  .pipe(browserSync.reload({ stream: true })); // перезагрузка сервера
}

//Таск на стили CSS
function styles() {
   //Шаблон для поиска файлов CSS
   //Всей файлы по шаблону './src/css/**/*.css'
   return gulp.src(cssFiles)
   .pipe(sass())
   //Объединение файлов в один
   .pipe(concat('style.css'))
   //Добавить префиксы
   .pipe(autoprefixer({
      overrideBrowserslist: ['last 2 versions'],
      cascade: false
   }))
   //Минификация CSS
   .pipe(cleanCSS({
      level: 2
   }))
   //Выходная папка для стилей
   .pipe(gulp.dest('./build/css'))
   .pipe(browserSync.stream());
}

//Таск на скрипты JS
function scripts() {
   //Шаблон для поиска файлов JS
   //Всей файлы по шаблону './src/js/**/*.js'
   return gulp.src(jsFiles)
   //Объединение файлов в один
   .pipe(concat('script.js'))
   //Минификация JS
   .pipe(uglify({
      /*toplevel: true*/
   }))
   //Выходная папка для скриптов
   .pipe(gulp.dest('./build/js'))
   .pipe(browserSync.stream());
}

//Удалить всё в указанной папке
function clean() {
   return del(['build/*'])
}

gulp.task('img-compress',()=>{
  return gulp.src('./src/images/**')
  .pipe(imagemin({
    progressive:true
  }))
  .pipe(gulp.dest('build/images'))
});
//Просматривать файлы
function watch() {
   browserSync.init({
      server: {
          baseDir: "./build"
      }
  });
  gulp.watch('.src/images/**', gulp.series('img-compress'))
  //Следить за CSS файлами
  gulp.watch('./src/css/**/*.css', styles)
  //Следить за JS файлами
  gulp.watch('./src/js/**/*.js', scripts)
  //При изменении HTML запустить синхронизацию
  gulp.watch("./src/*.html").on('change', browserSync.reload);
}

gulp.task('html', html);
//Таск вызывающий функцию styles
gulp.task('styles', styles);
//Таск вызывающий функцию scripts
gulp.task('scripts', scripts);
//Таск для очистки папки build
gulp.task('del', clean);
//Таск для отслеживания изменений
gulp.task('watch', watch);
//Таск для удаления файлов в папке build и запуск styles и scripts
gulp.task('build', gulp.series(clean, gulp.parallel('html','styles','img-compress','scripts')));

gulp.task('dev',gulp.series('build','watch'));
