export function run(gulp, $, config) {
  gulp.task('watch', [
    'build',
  ], () => {
    $.livereload.listen();

    gulp.watch(config.appFiles, [
      'build',
    ]);
  });
}
