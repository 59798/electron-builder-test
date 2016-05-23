import { app, BrowserWindow } from 'electron';

let win;
app.on('ready', () => {
  win = new BrowserWindow({
    width: 50,
    height: 50,
    transparent: true,
    frame: false,
  });
  win.on('closed', () => {
    win = null;
  });
});
