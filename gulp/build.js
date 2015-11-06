export function run(gulp, $, config) {
  gulp.task('clean', (done) => {
    return $.del(config.buildDir, done);
  });

  gulp.task('build:html', [
    'build:js',
    'build:scss'
  ], () => {
    let buildScripts = gulp.src(config.buildScriptFiles);
    let buildStyles = gulp.src(config.buildStyleFiles);

    return gulp.src(config.appMarkupFiles)
      .pipe($.wiredep.stream())
      .pipe($.inject(buildScripts))
      .pipe($.inject(buildStyles))
      .pipe(gulp.dest(config.buildDir));
  });

  gulp.task('build:js', [
    'clean',
  ], () => {
    return gulp.src(config.appScriptFiles)
      .pipe(gulp.dest(config.buildDir));
  });

  gulp.task('build:scss', [
    'clean'
  ], () => {
    return gulp.src(config.appStyleFiles)
      .pipe($.sourcemaps.init())
      .pipe($.sass({
        outputStyle: 'compressed',
      }))
      .pipe($.sourcemaps.write())
      .pipe(gulp.dest(config.buildDir));
  });

  gulp.task('build', [
    'clean',
    'build:html',
    'build:js',
    'build:scss',
  ]);
}
