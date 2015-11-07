import app from 'app';
import BrowserWindow from 'browser-window';
import crashReporter from 'crash-reporter';

let mainWindow = null;

crashReporter.start();

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
    frame: true,
    resizable: false,
  };

  mainWindow = new BrowserWindow(windowOptions);

  mainWindow.loadUrl('file://' + __dirname + '/index.html');

  mainWindow.webContents.openDevTools();

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
});
