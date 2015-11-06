import lodash from 'lodash';
import path from 'path';

const configDirs = {
  appDir: 'app',
  buildDir: 'build',
};

const configFiles = {
  appFiles: path.join(configDirs.appDir, '**/*'),
  appMarkupFiles: path.join(configDirs.appDir, '**/*.html'),
  appScriptFiles: path.join(configDirs.appDir, '**/*.js'),
  appStyleFiles: path.join(configDirs.appDir, '**/*.{css,scss}'),

  buildScriptFiles: path.join(configDirs.buildDir, '**/*.js'),
  buildStyleFiles: path.join(configDirs.buildDir, '**/*.css'),
};

let config = lodash.merge({}, configDirs, configFiles);

export default config;
