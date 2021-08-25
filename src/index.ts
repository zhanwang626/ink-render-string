import { EventEmitter } from "events";
import { render as inkRender } from "ink";
import { ReactElement } from "react";

const LASTFRAME_UNDEFINED = 'value of stdout.lastframe() is undefined';

class Stdout extends EventEmitter {
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


export const render = (tree: ReactElement): string => {
  const stdout = new Stdout();

  inkRender(tree, {
    stdout: stdout as any,
    debug: true,
    exitOnCtrlC: false,
    patchConsole: false,
  });

  return stdout.lastFrame() || LASTFRAME_UNDEFINED
};
