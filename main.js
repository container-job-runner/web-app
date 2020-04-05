const {app, session, BrowserWindow} = require('electron')
const os = require('os')
const path = require('path')
const url = require('url')

function createWindow () {
  // Create the browser window.
  let win = new BrowserWindow({width: 1200, height: 800, center: true})
  // and load the index.html of the app.
  win.loadURL(process.env['URL'] || `file://${path.join(__dirname, "index.html")}`)
  changeIcon(win, process.env['ICON'])
}

function changeIcon(window, app_name)
{
  var switchF, ext
  switch(os.platform())
  {
    case 'darwin':
      switchF = app.dock.setIcon
      break;
    default:
      switchF = window.setIcon
  }

  if(app_name === "jupyter" || app_name == "theia")
    switchF(path.join(__dirname, `assets/${app_name}.png`));
}

app.on('ready', async () => {
  await session.defaultSession.clearStorageData();
  createWindow();
})

app.on('window-all-closed', () => {
  app.quit();
  setInterval(() => app.exit(1), 3000); // force exit after 3 seconds
})
