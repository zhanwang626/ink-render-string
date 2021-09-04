# ink-render-string

ink-render-string provides a render function which will return a string, which is the rendered content of the ink component you pass to the render function.

## Install

```bash
yarn add ink-render-string
```

## Usage

```tsx
import { render } from 'ink-render-string';
import { Text } from 'ink';

const Component = () => <Text>Hello World</Text>;

const { output, cleanup } = render(<Component />);
output.includes('Hello World'); //=> true

cleanup(); // cleans up outstanding render resources
```

The `render` function also returns a number of other instance properties:

- `output`: the rendered output
- `cleanup`: a function which cleans up outstanding render resources
- `unmount`: a function which unmounts the component
- `stdout`: the original stdout
- `stderr`: the original stderr
- `exitCode`: the original exit code
- `frames`: an array of rendered frames
