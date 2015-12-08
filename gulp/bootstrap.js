export function run(gulp, $, config) {
  gulp.task('bootstrap', [
    'build',
  ], $.shell.task([
    config.electronPath + ' ' + config.bootstrapFile,
  ]));
}
