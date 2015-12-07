export function run(gulp, $, config) {
  gulp.task('clean', (done) => {
    return $.del(config.buildDir, done);
  });

  gulp.task('build:html', [
    'build:js',
    'build:scss',
  ], () => {
    const cwd = {
      cwd: config.buildDir,
    };

    const electronFilesFilter = [
      '**/*.js',
      '!lib/**/*.js',
    ];

    const buildScripts = gulp.src('**/*.js', cwd)
      .pipe($.filter(electronFilesFilter))
      .pipe($.angularFilesort());

    const buildStyles = gulp.src('**/*.css', cwd);

    const injectOptions = {
      addRootSlash: false,
    };

    return gulp.src(config.appIndexFile)
      .pipe($.wiredep.stream())
      .pipe($.inject(buildScripts, injectOptions))
      .pipe($.inject(buildStyles, injectOptions))
      .pipe(gulp.dest(config.buildDir))
      .pipe($.livereload());
  });

  gulp.task('build:copyTemplates', [
    'clean',
  ], () => {
    const indexFileFilter = [
      '**/*.html',
      '!index.html',
    ];

    return gulp.src(config.appMarkupFiles)
      .pipe($.filter(indexFileFilter))
      .pipe(gulp.dest(config.buildDir))
      .pipe($.livereload());
  });

  gulp.task('build:js', [
    'clean',
  ], () => {
    return gulp.src(config.appScriptFiles)
      .pipe($.babel({
        presets: [
          'es2015',
        ],
      }))
      .pipe(gulp.dest(config.buildDir))
      .pipe($.livereload());
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
      .pipe(gulp.dest(config.buildDir))
      .pipe($.livereload());
  });

  gulp.task('build', [
    'clean',
    'build:html',
    'build:copyTemplates',
    'build:js',
    'build:scss',
  ]);
}
