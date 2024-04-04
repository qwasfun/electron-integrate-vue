const { app, BrowserWindow } = require('electron');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({ width: 800, height: 600 });
  // mainWindow.loadFile('index.html');
  if(process.env.DEBUG){
    mainWindow.loadURL('http://localhost:8080')
  }else{
    mainWindow.loadFile(`file://${__dirname}/dist/index.html`);

  }
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', createWindow);
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
