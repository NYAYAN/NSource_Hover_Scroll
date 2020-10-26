const gulp = require('gulp');
const browserSync = require('browser-sync').create();

// Static server
gulp.task('browser-sync', function () {
    browserSync.init({
        notify: false,
        server: {
            baseDir: "./"
        }
    });
});


exports.default = gulp.parallel('browser-sync')