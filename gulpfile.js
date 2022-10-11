const { src, dest, watch, lastRun, series, parallel } = require("gulp");
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require("gulp-sourcemaps");
const browserSync = require("browser-sync").create();
const babel = require("gulp-babel");
const concat = require("gulp-concat");

function SCSS() {
    return src("src/scss/app.scss")
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write("."))
        .pipe(dest("public/css/"))
        .pipe(browserSync.stream())
}
module.exports.SCSS = SCSS;

function scripts() {
    return src("src/js/**/*.js")
        .pipe(sourcemaps.init())
        .pipe(concat("script.js"))
        .pipe(babel({
            presets: ["@babel/preset-env"]
        }))
        .pipe(sourcemaps.write("."))
        .pipe(dest("public/js/"))
        .pipe(browserSync.stream())
}
module.exports.scripts = scripts;

function myServer() {
    browserSync.init({
        server: {
            baseDir: "public"
        },
        notify: false
    });

    watch("src/scss/**/*.scss", { usePolling: true }, SCSS)
    watch("src/js/**/*.js", { usePolling: true }, scripts)
}

module.exports.default = series(SCSS, scripts, myServer);
