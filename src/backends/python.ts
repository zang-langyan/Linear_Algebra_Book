import { ipcRenderer, IpcRendererEvent } from "electron";

export type PyChannel = 'py-console';

export function sendPythonMessage(channel: PyChannel, ...args: unknown[]) {
  ipcRenderer.send(channel, ...args);
}

export function onPythonMessage(channel: PyChannel, func: (...args: unknown[]) => void) {
  const subscription = (_event: IpcRendererEvent, ...args: unknown[]) =>
    func(...args);
  ipcRenderer.on(channel, subscription);

  return () => {
    ipcRenderer.removeListener(channel, subscription);
  };
}

export function oncePythonMessage(channel: PyChannel, func: (...args: unknown[]) => void) {
  ipcRenderer.once(channel, (_event, ...args) => func(...args));
}

