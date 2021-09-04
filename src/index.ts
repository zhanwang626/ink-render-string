import { EventEmitter } from 'events';
import { render as inkRender } from 'ink';
import { ReactElement } from 'react';

interface Instance {
  output: string;
  unmount: () => void;
  cleanup: () => void;
  stdout: OutputStream;
  stderr: OutputStream;
  frames: string[];
}

const LASTFRAME_UNDEFINED = 'value of stdout.lastframe() is undefined';

class OutputStream extends EventEmitter {
  readonly frames: string[] = [];
  private _lastFrame?: string;

  write = (frame: string) => {
    this.frames.push(frame);
    this._lastFrame = frame;
  };

  lastFrame = () => {
    return this._lastFrame;
  };
}

export const render = (tree: ReactElement): Instance => {
  const stdout = new OutputStream();
  const stderr = new OutputStream();

  const instance = inkRender(tree, {
    stdout: stdout as any,
    stderr: stderr as any,
    debug: true,
    exitOnCtrlC: false,
    patchConsole: false,
  });

  return {
    output: stdout.lastFrame() || LASTFRAME_UNDEFINED,
    stdout,
    stderr,
    cleanup: instance.cleanup,
    unmount: instance.unmount,
    frames: stdout.frames,
  };
};
