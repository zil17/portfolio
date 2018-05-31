var gulp = require('gulp'),
    browserSync = require('browser-sync');

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false,
        // open: false,
        // online: false, // Work Offline Without Internet Connection
        // tunnel: true, tunnel: "projectname", // Demonstration page: http://projectname.localtunnel.me
    })
});

gulp.task('watch', ['browser-sync'], function() {
    gulp.watch('app/css/**/*.css', browserSync.reload);
    gulp.watch('app/js/*.js', browserSync.reload);
    gulp.watch('app/*.html', browserSync.reload)
});

gulp.task('default', ['watch']);