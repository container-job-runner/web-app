const {app, BrowserWindow} = require('electron')
const os = require('os')
const path = require('path')
const url = require('url')

let win

function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({width: 1200, height: 800, center: true})
  // and load the index.html of the app.
  win.loadURL(process.env['URL'] || `file://${path.join(__dirname, "index.html")}`)
  changeIcon(process.env['ICON'])
  // Emitted when the window is closed.
  win.on('closed', () => {win = null})
}

function changeIcon(app_name)
{
  var switchF, ext
  switch(os.platform())
  {
    case 'darwin':
      switchF = app.dock.setIcon
      break;
    default:
      switchF = win.setIcon
  }

  if(app_name === "jupyter" || app_name == "theia")
    switchF(path.join(__dirname, `assets/${app_name}.png`));
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  app.quit()
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})
