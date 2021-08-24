import * as React from "react";
import { Text } from "ink";
import { render } from "../src/index";

describe("Test ink render string", () => {
  it("render API can return string", () => {
    const Test = () => <Text>Hello World</Text>;
    const result = render(<Test />);

    expect(result).toContain(`Hello World`);
  });
});
