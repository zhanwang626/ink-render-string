# ink-render-string

ink-render-string provides a render function which will return a string, which is the rendered content of the ink component you pass to the render function.

## Install

```shell
yarn add ink-render-string
```

## Usage
```tsx
import { render } from 'ink-render-string';
import {Text} from 'ink';

const Component = () => <Text>Hello World</Text>;

const result = render(<Component />);
result.includes('Hello World') //=> true
```
