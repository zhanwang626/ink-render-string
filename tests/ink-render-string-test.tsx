import { describe, it, expect } from 'vitest';
import * as React from 'react';
import { Text } from 'ink';
import { OutputStream, render } from '../src/index';

describe('ink-render-string', () => {
  it('render API can return rendered output', () => {
    const Test = () => <Text>Hello World</Text>;
    const { output, cleanup } = render(<Test />);

    expect(output).toEqual('Hello World');

    cleanup();
  });

  it('returns instance properties', () => {
    const Test = () => (
      <>
        <Text>Hello World</Text>
        <Text>Goodbye, cruel world!</Text>
      </>
    );
    const { output, cleanup, frames, stdout, stderr, unmount } = render(
      <Test />
    );

    expect(output).toEqual(`Hello World
Goodbye, cruel world!`);
    expect(frames).toMatchInlineSnapshot(`
      [
        "Hello World
      Goodbye, cruel world!",
      ]
    `);
    expect(unmount).toBeInstanceOf(Function);
    expect(stdout).toBeInstanceOf(OutputStream);
    expect(stderr).toBeInstanceOf(OutputStream);

    cleanup();
  });
});
