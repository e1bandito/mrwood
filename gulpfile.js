'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var server = require('browser-sync').create();
var csso = require('gulp-csso');
var del = require('del');
var imagemin = require('gulp-imagemin');
var posthtml = require('gulp-posthtml');
var include = require('posthtml-include');
var pump = require('pump');
var rename = require('gulp-rename');
var run = require('run-sequence');
var svgstore = require('gulp-svgstore');
var uglify = require('gulp-uglify');
var webp = require('gulp-webp');
var concat = require('gulp-concat');
var rigger = require('gulp-rigger');
var sassGlob = require('gulp-sass-glob');
var sourcemaps = require('gulp-sourcemaps');
var ghPages = require('gulp-gh-pages');

// Автопрефиксер и минификация
gulp.task('style', function() {
  gulp.src('src/sass/style.scss')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sassGlob())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest('build/css'))
    .pipe(csso())
    .pipe(sourcemaps.write())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('build/css'))
    .pipe(server.stream());
});

// Минификация и конкатенация JS
gulp.task('js', function () {
  return gulp.src(['src/js/*.js', '!js/**/*.min.js'])
    .pipe(rigger())
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('build/js'));
});

// Оптимизация изображений
gulp.task('images', function () {
  return gulp.src('src/img/**/*.{png,jpg,svg}')
  .pipe(imagemin([
    imagemin.optipng({optimizationLevel: 3}),
    imagemin.jpegtran({progressive: true}),
    imagemin.svgo()
  ]))
  .pipe(gulp.dest('src/img'));
});

// Конвертация в webp
gulp.task('webp', function () {
  return gulp.src('src/img/**/*.{png,jpg}')
  .pipe(webp({quality: 90}))
  .pipe(gulp.dest('src/img'));
});

// SVG спрайт
gulp.task('sprite', function () {
  return gulp.src('src/img/sprite-*.svg')
  .pipe(svgstore({
    inlineSvg: true
  }))
  .pipe(rename('sprite.svg'))
  .pipe(gulp.dest('src/img'));
});

// posthtml-include
gulp.task('html', function () {
  return gulp.src('src/*.html')
  .pipe(posthtml([
    include()
  ]))
  .pipe(gulp.dest('build'));
});

// Очистка build
gulp.task('clean', function () {
  return del('build');
});

// Копирование в build
gulp.task('copy', function () {
  return gulp.src([
    'src/fonts/**/*.{woff,woff2}',
    'src/img/**',
    // 'src/js/**'
  ], {
    base: 'src/'
  })
  .pipe(gulp.dest('build'));
});


// Запуск сборки
gulp.task('build', function (done) {
  run(
    'clean',
    'copy',
    'style',
    'js',
    'sprite',
    'html',
    done
  );
});

gulp.task('serve', function() {
  server.init({
    server: 'build/',
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch('src/sass/**/*.scss', ['style']);
  gulp.watch('src/js/**', ['js']).on('change', server.reload);
  gulp.watch('src/*.html', ['html']).on('change', server.reload);
});

gulp.task('ghPages', function() {
  return gulp.src('build/**/*')
    .pipe(ghPages());
});
