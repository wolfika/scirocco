'use strict';

let mainWindow = null;
const BrowserWindow = require('browser-window');
const app = require('app');

require('crash-reporter').start();

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('ready', () => {
  const windowOptions = {
    width: 960,
    height: 720,

    center: true,
    frame: false,
    resizable: false,
  };

  mainWindow = new BrowserWindow(windowOptions);

  mainWindow.loadUrl('file://' + __dirname + '/index.html');

  //mainWindow.webContents.openDevTools();

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
});
