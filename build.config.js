import _ from 'lodash';
import path from 'path';

const configDirs = {
  appDir: 'app',
  buildDir: 'build',
  libDir: 'lib',
};

const configFiles = {
  electronPath: path.join(__dirname, 'node_modules', '.bin', 'electron'),
  bootstrapFile: path.join(configDirs.buildDir, configDirs.libDir, 'bootstrap.js'),

  appFiles: path.join(configDirs.appDir, '**/*'),
  appIndexFile: path.join(configDirs.appDir, 'index.html'),
  appMarkupFiles: path.join(configDirs.appDir, '**/*.html'),
  appScriptFiles: path.join(configDirs.appDir, '**/*.js'),
  appStyleFiles: path.join(configDirs.appDir, '**/*.{css,scss}'),

  buildScriptFiles: path.join(configDirs.buildDir, '**/*.js'),
  buildStyleFiles: path.join(configDirs.buildDir, '**/*.css'),
};

let config = _.merge({}, configDirs, configFiles);

export default config;
