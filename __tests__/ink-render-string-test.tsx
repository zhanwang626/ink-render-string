import * as React from 'react';
import { Text } from 'ink';
import { render } from '../src/index';

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
    const instance = render(<Test />);

    expect(instance).toMatchInlineSnapshot(`
      Object {
        "cleanup": [Function],
        "frames": Array [
          "Hello World
      Goodbye, cruel world!",
        ],
        "output": "Hello World
      Goodbye, cruel world!",
        "stderr": OutputStream {
          "_events": Object {},
          "_eventsCount": 0,
          "_maxListeners": undefined,
          "frames": Array [],
          "lastFrame": [Function],
          "write": [Function],
          Symbol(kCapture): false,
        },
        "stdout": OutputStream {
          "_events": Object {
            "resize": [Function],
          },
          "_eventsCount": 1,
          "_lastFrame": "Hello World
      Goodbye, cruel world!",
          "_maxListeners": undefined,
          "frames": Array [
            "Hello World
      Goodbye, cruel world!",
          ],
          "lastFrame": [Function],
          "write": [Function],
          Symbol(kCapture): false,
        },
        "unmount": [Function],
      }
    `);

    instance.cleanup();
  });
});
