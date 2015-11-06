export function run(gulp, $, config)  {
  gulp.task('lint:js', () => {
    return gulp.src(config.appScriptFiles)
      .pipe($.jshint())
      .pipe($.jscs())
      .pipe($.jscsStylish.combineWithHintResults())
      .pipe($.jshint.reporter('jshint-stylish'))
      .pipe($.jscs.reporter('fail'));
  });

  gulp.task('lint:scss', () => {
    return gulp.src(config.appStyleFiles)
      .pipe($.scssLint({
        bundleExec: true,
      }));
  });

  gulp.task('lint', [
    'lint:js',
    'lint:scss',
  ]);
}
