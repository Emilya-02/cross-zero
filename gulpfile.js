// const gulp = require('gulp');
// const sass = require('gulp-sass')(require('sass'));
// const sourcemaps = require('gulp-sourcemaps');
// const watch = require('gulp-watch');
// const browserSync = require('browser-sync').create()

// gulp.task('sass-compile', function() {
//   return gulp.src('./src/scss/**/*.scss')
//   .pipe(sourcemaps.init())
//   .pipe(sass().on('error', sass.logError))
//   .pipe(sourcemaps.write('./'))
//   .pipe(gulp.dest('./src/css'))
// })

// gulp.task('watch', function() {
//   browserSync.init({ server: { baseDir: './src', index: 'index.html' }, port: 8000 });
//   gulp.watch('./src/scss/**/*.scss', gulp.series('sass-compile'))
// })


const { src, dest, watch, lastRun, series, parallel } = require("gulp");
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require("gulp-sourcemaps");
const browserSync = require("browser-sync").create(); // сервер + перезагрузка
const babel = require("gulp-babel");                  // для работы с JS
const concat = require("gulp-concat");                // объединение файлов в один

function HTML() {
    return src("src/**/*.html", { since: lastRun(HTML) })
        .pipe(dest("public/"))
        .pipe(browserSync.stream())
}
module.exports.HTML = HTML;

function SCSS() {
    return src("src/scss/**/*.scss")
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write("."))
        .pipe(dest("src/css/"))
        .pipe(dest("public/css/"))
        .pipe(browserSync.stream())
}
module.exports.SCSS = SCSS;

function scripts() {
    return src("src/js/**/*.js")
        .pipe(sourcemaps.init())
        .pipe(dest("public/js/"))
        .pipe(babel({
            presets: ["@babel/preset-env"]
        }))
        .pipe(concat("script.js"))
        .pipe(sourcemaps.write("."))
        .pipe(dest("public/js/"))
        .pipe(browserSync.stream())
}
module.exports.scripts = scripts;

function myServer() {
    browserSync.init({
        server: {
            baseDir: "public" // папка для локального сервера
        },
        notify: false
    });

    watch("src/**/*.html", { usePolling: true }, HTML);
    watch("src/scss/**/*.scss", { usePolling: true }, SCSS)
    watch("src/js/**/*.js", { usePolling: true }, scripts)
}

module.exports.default = series(HTML, SCSS, scripts, myServer);
