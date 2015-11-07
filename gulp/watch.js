export function run(gulp, $, config) {
  gulp.task('watch', [
    'build',
  ], () => {
    gulp.watch(config.appFiles, [
      'build',
    ]);
  });
}
