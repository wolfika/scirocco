import gulp from 'gulp';
import loadPlugins from 'gulp-load-plugins';
import config from './build.config';

const tasks = require('require-dir')('./gulp');

const $ = loadPlugins({
  pattern: [
    'del',
    'gulp-*',
    'wiredep',
  ],
});

for (let key in tasks) {
  tasks[key].run(gulp, $, config);
}

gulp.task('default', [
  'lint',
  'build',
  'watch',
]);
